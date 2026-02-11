import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, Schedule } from '../../types';
import { localize } from '../../localize';
import { schedulerManager } from '../../utils/scheduler-api';
import { getActionLabel, buildScheduleParams } from '../../utils/timer-utils';

import './timer-picker';
import './timer-badge';

@customElement('hac-timer-dialog')
export class TimerDialog extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property() entityId = '';
  @property() entityName = '';
  @property({ type: Boolean }) open = false;
  @property() defaultAction = 'turn_off';

  @state() private _schedules: Schedule[] = [];
  private _unsubscribe?: () => void;

  connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = schedulerManager.subscribe(() => {
      this._schedules = schedulerManager.getSchedulesForEntity(this.entityId);
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
      this._schedules = schedulerManager.getSchedulesForEntity(this.entityId);
    }
  }

  private _close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('dialog-closed', { bubbles: true, composed: true }),
    );
  }

  private async _onTimerStart(e: CustomEvent) {
    const params = buildScheduleParams(this.entityId, e.detail);
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

          ${this._schedules.length > 0
            ? html`
                <div class="active-section">
                  <div class="section-title">
                    ${localize('timer.active', lang)}
                  </div>
                  ${this._schedules.map(
                    (s) => html`
                      <div class="active-item">
                        <hac-timer-badge
                          .schedule=${s}
                        ></hac-timer-badge>
                        <span class="action-text">
                          ${getActionLabel(s.action, lang)}
                        </span>
                        <button
                          class="cancel-btn"
                          @click=${() => this._cancelSchedule(s.id)}
                        >
                          <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                      </div>
                    `,
                  )}
                </div>
              `
            : nothing}
        </div>
      </ha-dialog>
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-timer-dialog': TimerDialog;
  }
}
