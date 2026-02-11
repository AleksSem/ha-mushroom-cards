import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, Schedule } from '../../types';
import { localize } from '../../localize';
import { schedulerManager } from '../../utils/scheduler-api';
import { getActionLabel, buildScheduleParams, buildGroupScheduleParams } from '../../utils/timer-utils';
import './timer-picker';
import './timer-badge';

const DAY_KEYS = [
  'timer.day_mon', 'timer.day_tue', 'timer.day_wed', 'timer.day_thu',
  'timer.day_fri', 'timer.day_sat', 'timer.day_sun',
];

function formatDays(days: number[], lang: string): string {
  return days.map((d) => localize(DAY_KEYS[d], lang)).join(', ');
}

function formatTimeFromISO(isoStr: string): string {
  const d = new Date(isoStr);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

@customElement('hac-timer-dialog')
export class TimerDialog extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) entityId: string | string[] = '';
  @property() entityName = '';
  @property({ type: Boolean }) open = false;
  @property() defaultAction = 'turn_off';

  @state() private _schedules: Schedule[] = [];
  private _unsubscribe?: () => void;

  private get _primaryEntityId(): string {
    return Array.isArray(this.entityId) ? this.entityId[0] : this.entityId;
  }

  connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = schedulerManager.subscribe(() => {
      this._schedules = schedulerManager.getSchedulesForEntity(this._primaryEntityId);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribe?.();
  }

  updated(changedProps: Map<string, any>) {
    if (changedProps.has('hass') && this.hass) {
      schedulerManager.connect(this.hass);
    }
    if (changedProps.has('entityId')) {
      this._schedules = schedulerManager.getSchedulesForEntity(this._primaryEntityId);
    }
  }

  private _close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('dialog-closed', { bubbles: true, composed: true }),
    );
  }

  private async _onTimerStart(e: CustomEvent) {
    const params = Array.isArray(this.entityId) && this.entityId.length > 1
      ? buildGroupScheduleParams(this.entityId, e.detail)
      : buildScheduleParams(this._primaryEntityId, e.detail);
    await schedulerManager.createSchedule(this.hass, params);
  }

  private async _cancelSchedule(scheduleId: string) {
    await schedulerManager.cancelSchedule(this.hass, scheduleId);
  }

  render() {
    if (!this.open) return nothing;

    const lang = this.hass?.language || 'en';

    return html`
      <ha-dialog
        .open=${this.open}
        @closed=${this._close}
        .heading=${localize('timer.title', lang)}
      >
        <div class="dialog-content">
          <div class="entity-header">
            <span class="entity-name">${this.entityName}</span>
          </div>

          <hac-timer-picker
            .lang=${lang}
            .action=${this.defaultAction}
            @timer-start=${this._onTimerStart}
          ></hac-timer-picker>

          ${this._renderOneShotSection(lang)}
          ${this._renderRecurringSection(lang)}
        </div>
      </ha-dialog>
    `;
  }

  private _renderOneShotSection(lang: string) {
    const oneShot = this._schedules.filter((s) => !s.recurring);
    if (oneShot.length === 0) return nothing;

    return html`
      <div class="active-section">
        <div class="section-title">${localize('timer.active', lang)}</div>
        ${oneShot.map(
          (s) => html`
            <div class="active-item">
              <hac-timer-badge .schedule=${s}></hac-timer-badge>
              <span class="action-text">${getActionLabel(s.action, lang)}</span>
              <button class="cancel-btn" @click=${() => this._cancelSchedule(s.id)}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            </div>
          `,
        )}
      </div>
    `;
  }

  private _renderRecurringSection(lang: string) {
    const recurring = this._schedules.filter((s) => s.recurring);
    if (recurring.length === 0) return nothing;

    return html`
      <div class="active-section">
        <div class="section-title">${localize('timer.recurring', lang)}</div>
        ${recurring.map(
          (s) => html`
            <div class="active-item">
              <ha-icon class="recurring-icon" icon="mdi:calendar-clock"></ha-icon>
              <span class="recurring-info">
                ${s.days_of_week ? formatDays(s.days_of_week, lang) : ''}
                ${s.trigger_at ? formatTimeFromISO(s.trigger_at) : ''}
              </span>
              <span class="action-text">${getActionLabel(s.action, lang)}</span>
              <button class="cancel-btn" @click=${() => this._cancelSchedule(s.id)}>
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            </div>
          `,
        )}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    .dialog-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0 8px 8px;
      min-width: 280px;
    }
    .entity-header {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .entity-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .active-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .section-title {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .active-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 0;
    }
    .action-text {
      flex: 1;
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .cancel-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      cursor: pointer;
      border-radius: 50%;
      transition: background 0.2s;
    }
    .cancel-btn:hover {
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    }
    .cancel-btn ha-icon {
      --mdc-icon-size: 18px;
    }
    .recurring-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
      flex-shrink: 0;
    }
    .recurring-info {
      font-size: 13px;
      color: var(--primary-text-color);
      white-space: nowrap;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-timer-dialog': TimerDialog;
  }
}
