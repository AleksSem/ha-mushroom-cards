"""WebSocket API for HAC scheduler."""

import logging

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback

from .const import (
    DOMAIN,
    WS_TYPE_CREATE,
    WS_TYPE_CANCEL,
    WS_TYPE_LIST,
    WS_TYPE_SUBSCRIBE,
)

_LOGGER = logging.getLogger(__name__)


def async_register_websocket_api(hass: HomeAssistant) -> None:
    """Register all WebSocket handlers."""
    websocket_api.async_register_command(hass, ws_create_schedule)
    websocket_api.async_register_command(hass, ws_cancel_schedule)
    websocket_api.async_register_command(hass, ws_list_schedules)
    websocket_api.async_register_command(hass, ws_subscribe_schedules)


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_TYPE_CREATE,
        vol.Required("target_entity"): str,
        vol.Optional("action", default="turn_off"): vol.In(
            ["turn_on", "turn_off", "toggle", "custom"]
        ),
        vol.Optional("service"): str,
        vol.Optional("service_data"): dict,
        vol.Optional("duration"): int,
        vol.Optional("time"): str,
    }
)
@websocket_api.async_response
async def ws_create_schedule(hass, connection, msg):
    """Handle hac/scheduler/create."""
    scheduler = hass.data[DOMAIN]["scheduler"]

    try:
        schedule = await scheduler.async_create(
            {
                "target_entity": msg["target_entity"],
                "action": msg.get("action", "turn_off"),
                "service": msg.get("service"),
                "service_data": msg.get("service_data"),
                "duration": msg.get("duration"),
                "time": msg.get("time"),
            }
        )
        connection.send_result(
            msg["id"],
            {
                "schedule_id": schedule.id,
                "trigger_at": schedule.trigger_at,
                "status": schedule.status,
            },
        )
    except ValueError as err:
        connection.send_error(msg["id"], "invalid_data", str(err))
    except Exception as err:
        _LOGGER.exception("Error creating schedule")
        connection.send_error(msg["id"], "unknown_error", str(err))


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_TYPE_CANCEL,
        vol.Required("schedule_id"): str,
    }
)
@websocket_api.async_response
async def ws_cancel_schedule(hass, connection, msg):
    """Handle hac/scheduler/cancel."""
    scheduler = hass.data[DOMAIN]["scheduler"]

    try:
        await scheduler.async_cancel(msg["schedule_id"])
        connection.send_result(msg["id"], {"success": True})
    except ValueError as err:
        connection.send_error(msg["id"], "not_found", str(err))
    except Exception as err:
        _LOGGER.exception("Error cancelling schedule")
        connection.send_error(msg["id"], "unknown_error", str(err))


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_TYPE_LIST,
        vol.Optional("entity_id"): str,
    }
)
@callback
def ws_list_schedules(hass, connection, msg):
    """Handle hac/scheduler/list."""
    scheduler = hass.data[DOMAIN]["scheduler"]
    entity_id = msg.get("entity_id")
    schedules = scheduler.get_schedules(entity_id)
    connection.send_result(
        msg["id"],
        {"schedules": [s.to_dict() for s in schedules]},
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_TYPE_SUBSCRIBE,
    }
)
@callback
def ws_subscribe_schedules(hass, connection, msg):
    """Handle hac/scheduler/subscribe — long-lived subscription."""
    scheduler = hass.data[DOMAIN]["scheduler"]

    @callback
    def forward_event(event_type, schedule):
        connection.send_message(
            websocket_api.event_message(
                msg["id"],
                {
                    "type": event_type,
                    "schedule": schedule.to_dict(),
                },
            )
        )

    unsub = scheduler.subscribe(forward_event)
    connection.subscriptions[msg["id"]] = unsub
    connection.send_result(msg["id"])
