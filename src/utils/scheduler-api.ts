import { HomeAssistant, Schedule } from '../types';

export interface CreateScheduleParams {
  target_entity: string;
  action: string;
  service?: string;
  service_data?: Record<string, any>;
  duration?: number;
  time?: string;
}

type ScheduleCallback = (schedules: Schedule[]) => void;

class SchedulerManager {
  private _schedules: Map<string, Schedule[]> = new Map();
  private _subscribers: Set<ScheduleCallback> = new Set();
  private _unsubscribe: (() => void) | null = null;
  private _connected = false;
  private _pollInterval: ReturnType<typeof setTimeout> | null = null;
  private _hass: HomeAssistant | null = null;
  private _pollFailures = 0;

  async connect(hass: HomeAssistant): Promise<void> {
    if (this._connected) return;
    this._connected = true;
    this._hass = hass;

    // Load initial data
    try {
      const result = await hass.callWS<{ schedules: Schedule[] }>({
        type: 'hac/scheduler/list',
      });
      this._updateFromList(result.schedules);
    } catch (e) {
      // Scheduler not available yet
      this._connected = false;
      return;
    }

    // Subscribe to real-time updates
    try {
      const unsub = await hass.connection.subscribeMessage(
        (msg: any) => {
          const schedule: Schedule = msg.schedule;
          if (msg.type === 'created' || msg.type === 'updated') {
            this._removeSchedule(schedule.id);
            if (schedule.status === 'active') {
              this._addSchedule(schedule);
            }
          } else if (msg.type === 'cancelled' || msg.type === 'triggered') {
            this._removeSchedule(schedule.id);
          }
          this._notifySubscribers();
        },
        { type: 'hac/scheduler/subscribe' },
      );
      this._unsubscribe = unsub;
    } catch {
      // Subscription failed, fall back to polling
      this._startPolling();
    }
  }

  disconnect(): void {
    if (this._unsubscribe) {
      this._unsubscribe();
      this._unsubscribe = null;
    }
    this._stopPolling();
    this._connected = false;
    this._hass = null;
    this._schedules.clear();
  }

  private _startPolling(): void {
    this._stopPolling();
    this._pollFailures = 0;
    this._schedulePoll();
  }

  private _schedulePoll(): void {
    const delay = Math.min(15000 * Math.pow(2, this._pollFailures), 300000);
    this._pollInterval = setTimeout(async () => {
      if (!this._hass) return;
      try {
        const result = await this._hass.callWS<{ schedules: Schedule[] }>({
          type: 'hac/scheduler/list',
        });
        this._updateFromList(result.schedules);
        this._pollFailures = 0;
      } catch {
        this._pollFailures++;
      }
      this._schedulePoll();
    }, delay);
  }

  private _stopPolling(): void {
    if (this._pollInterval) {
      clearTimeout(this._pollInterval);
      this._pollInterval = null;
    }
  }

  async createSchedule(
    hass: HomeAssistant,
    params: CreateScheduleParams,
  ): Promise<Schedule | null> {
    try {
      const result = await hass.callWS<{
        schedule_id: string;
        trigger_at: string;
        status: string;
      }>({
        type: 'hac/scheduler/create',
        ...params,
      });
      // The subscription will update the list, but return the basic info
      return {
        id: result.schedule_id,
        target_entity: params.target_entity,
        action: params.action,
        trigger_at: result.trigger_at,
        created_at: new Date().toISOString(),
        status: result.status,
        duration: params.duration,
        service: params.service,
        service_data: params.service_data,
      };
    } catch (e) {
      console.error('[hac-scheduler] Failed to create schedule:', e);
      return null;
    }
  }

  async cancelSchedule(
    hass: HomeAssistant,
    scheduleId: string,
  ): Promise<boolean> {
    try {
      await hass.callWS({ type: 'hac/scheduler/cancel', schedule_id: scheduleId });
      return true;
    } catch (e) {
      console.error('[hac-scheduler] Failed to cancel schedule:', e);
      return false;
    }
  }

  getSchedulesForEntity(entityId: string): Schedule[] {
    return [...(this._schedules.get(entityId) || [])];
  }

  subscribe(callback: ScheduleCallback): () => void {
    this._subscribers.add(callback);
    return () => this._subscribers.delete(callback);
  }

  private _updateFromList(schedules: Schedule[]): void {
    this._schedules.clear();
    for (const s of schedules) {
      if (s.status === 'active') {
        const list = this._schedules.get(s.target_entity) || [];
        list.push(s);
        this._schedules.set(s.target_entity, list);
      }
    }
    this._notifySubscribers();
  }

  private _addSchedule(schedule: Schedule): void {
    const list = this._schedules.get(schedule.target_entity) || [];
    list.push(schedule);
    this._schedules.set(schedule.target_entity, list);
  }

  private _removeSchedule(scheduleId: string): void {
    for (const [entity, list] of this._schedules.entries()) {
      const idx = list.findIndex((s) => s.id === scheduleId);
      if (idx !== -1) {
        list.splice(idx, 1);
        if (list.length === 0) {
          this._schedules.delete(entity);
        }
        break;
      }
    }
  }

  private _notifySubscribers(): void {
    const all: Schedule[] = [];
    for (const list of this._schedules.values()) {
      all.push(...list);
    }
    for (const cb of this._subscribers) {
      cb(all);
    }
  }
}

export const schedulerManager = new SchedulerManager();
