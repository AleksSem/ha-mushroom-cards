import { LitElement, html, css, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { safeCustomElement } from '../../utils/safe-custom-element';
import { localize } from '../../localize';

const DEFAULT_PRESETS = [300, 600, 900, 1800, 3600, 7200];

@safeCustomElement('hac-timer-picker')
export class TimerPicker extends LitElement {
  @property() lang = 'en';
  @property({ type: Array }) presets: number[] = DEFAULT_PRESETS;
  @property() action = 'turn_off';
  @property({ type: Boolean }) disabled = false;

  @state() private _mode: 'duration' | 'time' = 'duration';
  @state() private _hours = 0;
  @state() private _minutes = 10;
  @state() private _timeValue = '';
  @state() private _selectedAction = 'turn_off';
  @state() private _selectedDays: number[] = [];

  connectedCallback() {
    super.connectedCallback();
    this._selectedAction = this.action;
  }

  private _formatPreset(seconds: number): string {
    if (seconds >= 3600) {
      const h = seconds / 3600;
      return `${h}${localize('timer.hours', this.lang)}`;
    }
    const m = seconds / 60;
    return `${m}${localize('timer.minutes', this.lang)}`;
  }

  private _setMode(mode: 'duration' | 'time') {
    this._mode = mode;
    if (mode === 'duration') {
      this._selectedDays = [];
    }
  }

  private _toggleDay(day: number) {
    if (this._selectedDays.includes(day)) {
      this._selectedDays = this._selectedDays.filter((d) => d !== day);
    } else {
      this._selectedDays = [...this._selectedDays, day].sort();
    }
  }

  private _selectPreset(seconds: number) {
    this._hours = Math.floor(seconds / 3600);
    this._minutes = Math.floor((seconds % 3600) / 60);
  }

  private _onHoursChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this._hours = Math.max(0, Math.min(23, parseInt(input.value) || 0));
  }

  private _onMinutesChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this._minutes = Math.max(0, Math.min(59, parseInt(input.value) || 0));
  }

  private _onTimeChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this._timeValue = input.value;
  }

  private _onActionChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    this._selectedAction = select.value;
  }

  private _startTimer() {
    if (this.disabled) return;

    if (this._mode === 'duration') {
      const duration = this._hours * 3600 + this._minutes * 60;
      if (duration <= 0) return;
      this.dispatchEvent(
        new CustomEvent('timer-start', {
          detail: { duration, action: this._selectedAction },
          bubbles: true,
          composed: true,
        }),
      );
    } else {
      if (!this._timeValue) return;
      const detail: Record<string, any> = { time: this._timeValue, action: this._selectedAction };
      detail.days_of_week = this._selectedDays.length > 0
        ? this._selectedDays
        : [0, 1, 2, 3, 4, 5, 6];
      this.dispatchEvent(
        new CustomEvent('timer-start', {
          detail,
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  render() {
    const lang = this.lang;

    return html`
      <div class="picker">
        <div class="mode-toggle">
          <button
            class=${this._mode === 'duration' ? 'active' : ''}
            @click=${() => this._setMode('duration')}
          >
            ${localize('timer.duration_mode', lang)}
          </button>
          <button
            class=${this._mode === 'time' ? 'active' : ''}
            @click=${() => this._setMode('time')}
          >
            ${localize('timer.time_mode', lang)}
          </button>
        </div>

        ${this._mode === 'duration' ? this._renderDuration(lang) : this._renderTime()}

        <div class="action-row">
          <span class="action-label">${localize('timer.action', lang)}</span>
          <select .value=${this._selectedAction} @change=${this._onActionChange}>
            <option value="turn_off">${localize('timer.turn_off', lang)}</option>
            <option value="turn_on">${localize('timer.turn_on', lang)}</option>
            <option value="toggle">${localize('timer.toggle', lang)}</option>
          </select>
        </div>

        <button
          class="start-btn"
          ?disabled=${this.disabled}
          @click=${this._startTimer}
        >
          ${localize('timer.start', lang)}
        </button>
      </div>
    `;
  }

  private _renderDuration(lang: string) {
    return html`
      <div class="duration-inputs">
        <div class="input-group">
          <input
            type="number"
            min="0"
            max="23"
            .value=${String(this._hours)}
            @change=${this._onHoursChange}
          />
          <span>${localize('timer.hours', lang)}</span>
        </div>
        <div class="input-group">
          <input
            type="number"
            min="0"
            max="59"
            .value=${String(this._minutes)}
            @change=${this._onMinutesChange}
          />
          <span>${localize('timer.minutes', lang)}</span>
        </div>
      </div>
      ${this.presets.length > 0
        ? html`
            <div class="presets">
              ${this.presets.map(
                (p) => html`
                  <button
                    class="preset-chip"
                    @click=${() => this._selectPreset(p)}
                  >
                    ${this._formatPreset(p)}
                  </button>
                `,
              )}
            </div>
          `
        : nothing}
    `;
  }

  private static DAY_KEYS = [
    'timer.day_mon', 'timer.day_tue', 'timer.day_wed', 'timer.day_thu',
    'timer.day_fri', 'timer.day_sat', 'timer.day_sun',
  ];

  private _renderTime() {
    const lang = this.lang;
    return html`
      <div class="time-input">
        <input
          type="time"
          .value=${this._timeValue}
          @change=${this._onTimeChange}
        />
      </div>
      <div class="day-chips">
        ${TimerPicker.DAY_KEYS.map((key, i) => html`
          <button
            class="day-chip ${this._selectedDays.includes(i) ? 'selected' : ''}"
            @click=${() => this._toggleDay(i)}
          >${localize(key, lang)}</button>
        `)}
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    .picker {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .mode-toggle {
      display: flex;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    }
    .mode-toggle button {
      flex: 1;
      padding: 8px 12px;
      border: none;
      background: transparent;
      color: var(--primary-text-color);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .mode-toggle button.active {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
    }
    .duration-inputs {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .input-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .input-group input {
      width: 56px;
      padding: 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 16px;
      text-align: center;
      outline: none;
    }
    .input-group input:focus {
      border-color: var(--primary-color);
    }
    .input-group span {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .time-input input {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 16px;
      outline: none;
      box-sizing: border-box;
    }
    .time-input input:focus {
      border-color: var(--primary-color);
    }
    .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .preset-chip {
      padding: 6px 14px;
      border-radius: 16px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      color: var(--primary-text-color);
      font-size: 13px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .preset-chip:hover {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
    .action-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .action-label {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .action-row select {
      padding: 6px 10px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 13px;
      outline: none;
    }
    .day-chips {
      display: flex;
      gap: 6px;
      justify-content: center;
    }
    .day-chip {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      color: var(--primary-text-color);
      font-size: 11px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .day-chip.selected {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
    .start-btn {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 8px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .start-btn:hover {
      opacity: 0.9;
    }
    .start-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-timer-picker': TimerPicker;
  }
}
