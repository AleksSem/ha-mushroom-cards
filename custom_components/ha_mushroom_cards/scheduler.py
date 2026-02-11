"""Scheduler engine for HAC cards — manages timers with persistence."""

import logging
import uuid
from dataclasses import dataclass, field, asdict
from datetime import datetime, timedelta
from typing import Any, Callable

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.event import async_track_point_in_time
from homeassistant.helpers.storage import Store
from homeassistant.util import dt as dt_util

_LOGGER = logging.getLogger(__name__)

STORAGE_KEY = "hac_scheduler"
STORAGE_VERSION = 1


@dataclass
class Schedule:
    """A scheduled action."""

    id: str
    target_entity: str
    action: str  # turn_on | turn_off | toggle | custom
    trigger_at: str  # ISO format UTC
    created_at: str  # ISO format UTC
    status: str = "active"  # active | triggered | cancelled | failed
    service: str | None = None  # For custom actions
    service_data: dict[str, Any] | None = None
    duration: int | None = None  # Original duration in seconds
    retry_count: int = 0

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)

    @classmethod
    def from_dict(cls, data: dict[str, Any]) -> "Schedule":
        return cls(**{k: v for k, v in data.items() if k in cls.__dataclass_fields__})


class HacScheduler:
    """Manages schedules: CRUD, persistence, timer callbacks."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store = Store(hass, STORAGE_VERSION, STORAGE_KEY)
        self._schedules: dict[str, Schedule] = {}
        self._unsub_timers: dict[str, Callable] = {}
        self._subscribers: list[Callable] = []

    async def async_load(self) -> None:
        """Load persisted schedules on startup, re-register timers."""
        data = await self._store.async_load()
        if not data or "schedules" not in data:
            _LOGGER.info("[hac_scheduler] No saved schedules found")
            return

        now = dt_util.utcnow()
        loaded = 0
        expired = 0

        for entry in data["schedules"]:
            try:
                schedule = Schedule.from_dict(entry)
            except (TypeError, KeyError) as err:
                _LOGGER.warning("[hac_scheduler] Skipping invalid schedule: %s", err)
                continue

            if schedule.status not in ("active", "failed"):
                continue

            # Retry failed schedules if under max retries
            if schedule.status == "failed":
                if schedule.retry_count >= 3:
                    continue
                schedule.status = "active"

            trigger_at = datetime.fromisoformat(schedule.trigger_at)
            if trigger_at <= now:
                # Already past — trigger immediately
                expired += 1
                self._schedules[schedule.id] = schedule
                self._hass.async_create_task(self._async_trigger(schedule.id))
            else:
                self._schedules[schedule.id] = schedule
                self._register_timer(schedule)
                loaded += 1

        await self._async_save()
        _LOGGER.info(
            "[hac_scheduler] Loaded %d schedules (%d expired, triggered immediately)",
            loaded,
            expired,
        )

    async def async_create(self, data: dict[str, Any]) -> Schedule:
        """Create schedule, register timer, persist, return schedule."""
        target_entity = data["target_entity"]
        if target_entity not in self._hass.states.async_entity_ids():
            raise ValueError(f"Entity '{target_entity}' not found")

        now = dt_util.utcnow()

        # Calculate trigger_at
        if "duration" in data and data["duration"]:
            duration = int(data["duration"])
            trigger_at = now + timedelta(seconds=duration)
        elif "time" in data and data["time"]:
            # Parse HH:MM, find next occurrence
            time_str = data["time"]
            parts = time_str.split(":")
            if len(parts) != 2:
                raise ValueError(f"Invalid time format '{time_str}', expected HH:MM")
            try:
                hour, minute = int(parts[0]), int(parts[1])
            except ValueError:
                raise ValueError(f"Invalid time format '{time_str}', expected HH:MM")
            local_now = dt_util.now()
            target = local_now.replace(hour=hour, minute=minute, second=0, microsecond=0)
            if target <= local_now:
                target += timedelta(days=1)
            trigger_at = dt_util.as_utc(target)
            duration = int((trigger_at - now).total_seconds())
        else:
            raise ValueError("Either 'duration' or 'time' must be provided")

        schedule = Schedule(
            id=str(uuid.uuid4()),
            target_entity=data["target_entity"],
            action=data.get("action", "turn_off"),
            service=data.get("service"),
            service_data=data.get("service_data"),
            trigger_at=trigger_at.isoformat(),
            created_at=now.isoformat(),
            status="active",
            duration=duration,
        )

        self._schedules[schedule.id] = schedule
        self._register_timer(schedule)
        await self._async_save()
        self._notify_subscribers("created", schedule)

        _LOGGER.info(
            "[hac_scheduler] Created schedule %s: %s → %s at %s",
            schedule.id[:8],
            schedule.target_entity,
            schedule.action,
            schedule.trigger_at,
        )
        return schedule

    async def async_cancel(self, schedule_id: str) -> None:
        """Cancel schedule, remove timer, persist."""
        schedule = self._schedules.get(schedule_id)
        if not schedule:
            raise ValueError(f"Schedule {schedule_id} not found")

        schedule.status = "cancelled"

        unsub = self._unsub_timers.pop(schedule_id, None)
        if unsub:
            unsub()

        await self._async_save()
        self._notify_subscribers("cancelled", schedule)

        _LOGGER.info("[hac_scheduler] Cancelled schedule %s", schedule_id[:8])

    def get_schedules(self, entity_id: str | None = None) -> list[Schedule]:
        """List active schedules, optionally filtered by target entity."""
        schedules = [
            s for s in self._schedules.values() if s.status == "active"
        ]
        if entity_id:
            schedules = [s for s in schedules if s.target_entity == entity_id]
        return schedules

    def subscribe(self, callback_fn: Callable) -> Callable:
        """Subscribe to schedule events. Returns unsubscribe function."""
        self._subscribers.append(callback_fn)

        def unsubscribe():
            self._subscribers.remove(callback_fn)

        return unsubscribe

    async def async_unload(self) -> None:
        """Cancel all active timers and clear state."""
        for unsub in self._unsub_timers.values():
            unsub()
        self._unsub_timers.clear()
        self._subscribers.clear()
        self._schedules.clear()

    @callback
    def _notify_subscribers(self, event_type: str, schedule: Schedule) -> None:
        """Notify all subscribers of a schedule event."""
        for cb in list(self._subscribers):
            try:
                cb(event_type, schedule)
            except Exception:
                _LOGGER.exception("[hac_scheduler] Error notifying subscriber")

    def _register_timer(self, schedule: Schedule) -> None:
        """Register a timer for a schedule."""
        trigger_at = datetime.fromisoformat(schedule.trigger_at)
        if trigger_at.tzinfo is None:
            trigger_at = trigger_at.replace(tzinfo=dt_util.UTC)

        @callback
        def _timer_fired(_now):
            self._hass.async_create_task(self._async_trigger(schedule.id))

        self._unsub_timers[schedule.id] = async_track_point_in_time(
            self._hass, _timer_fired, trigger_at
        )

    async def _async_trigger(self, schedule_id: str) -> None:
        """Timer fired — execute service call, update status, notify."""
        schedule = self._schedules.get(schedule_id)
        if not schedule or schedule.status != "active":
            return

        schedule.status = "triggered"
        self._unsub_timers.pop(schedule_id, None)

        # Save BEFORE service call (best effort — don't block action on save failure)
        try:
            await self._async_save()
        except Exception:
            _LOGGER.warning(
                "[hac_scheduler] Failed to save before trigger %s", schedule_id[:8]
            )

        # Execute the action
        try:
            entity_id = schedule.target_entity
            domain = entity_id.split(".")[0]

            if schedule.action == "custom" and schedule.service:
                svc_parts = schedule.service.split(".")
                if len(svc_parts) != 2:
                    raise ValueError(
                        f"Invalid service format '{schedule.service}', expected 'domain.service'"
                    )
                svc_domain = svc_parts[0]
                svc_service = svc_parts[1]
                svc_data = {
                    "entity_id": entity_id,
                    **(schedule.service_data or {}),
                }
                await self._hass.services.async_call(svc_domain, svc_service, svc_data)
            elif schedule.action == "turn_on":
                await self._hass.services.async_call(domain, "turn_on", {"entity_id": entity_id})
            elif schedule.action == "turn_off":
                await self._hass.services.async_call(domain, "turn_off", {"entity_id": entity_id})
            elif schedule.action == "toggle":
                await self._hass.services.async_call(domain, "toggle", {"entity_id": entity_id})

            _LOGGER.info(
                "[hac_scheduler] Triggered schedule %s: %s → %s",
                schedule_id[:8],
                entity_id,
                schedule.action,
            )
        except Exception:
            _LOGGER.exception(
                "[hac_scheduler] Error triggering schedule %s", schedule_id[:8]
            )
            # Retry logic: reschedule if under max retries
            if schedule.retry_count < 3:
                schedule.retry_count += 1
                schedule.status = "active"
                retry_at = dt_util.utcnow() + timedelta(seconds=30)
                schedule.trigger_at = retry_at.isoformat()
                self._register_timer(schedule)
                await self._async_save()
                self._notify_subscribers("updated", schedule)
                _LOGGER.warning(
                    "[hac_scheduler] Retry %d/3 for schedule %s at %s",
                    schedule.retry_count,
                    schedule_id[:8],
                    schedule.trigger_at,
                )
                return
            else:
                schedule.status = "failed"

        await self._async_save()
        self._notify_subscribers("triggered", schedule)

    async def _async_save(self) -> None:
        """Persist all schedules to .storage/hac_scheduler."""
        # Only persist active and recently triggered/cancelled (last 24h)
        now = dt_util.utcnow()
        cutoff = now - timedelta(hours=24)
        schedules = []
        for s in self._schedules.values():
            if s.status in ("active", "failed"):
                schedules.append(s.to_dict())
            else:
                created = datetime.fromisoformat(s.created_at)
                if created.tzinfo is None:
                    created = created.replace(tzinfo=dt_util.UTC)
                if created > cutoff:
                    schedules.append(s.to_dict())

        await self._store.async_save({"schedules": schedules})
