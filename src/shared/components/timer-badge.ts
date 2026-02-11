import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Schedule } from '../../types';
import { localize } from '../../localize';

const DAY_KEYS = [
  'timer.day_mon', 'timer.day_tue', 'timer.day_wed', 'timer.day_thu',
  'timer.day_fri', 'timer.day_sat', 'timer.day_sun',
];

@customElement('hac-timer-badge')
export class TimerBadge extends LitElement {
  @property({ attribute: false }) schedule!: Schedule;
  @property({ type: Boolean }) compact = false;
  @property() lang = 'en';

  @state() private _remaining = '';
  private _interval?: ReturnType<typeof setInterval>;

  connectedCallback() {
    super.connectedCallback();
    this._updateCountdown();
    if (!this.schedule?.recurring) {
      this._interval = setInterval(() => this._updateCountdown(), 1000);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = undefined;
    }
  }

  updated(changedProps: Map<string, any>) {
    if (changedProps.has('schedule')) {
      this._updateCountdown();
    }
  }

  private _updateCountdown() {
    if (!this.schedule) return;

    if (this.schedule.recurring) {
      this._remaining = this._formatRecurring();
      return;
    }

    const now = Date.now();
    const target = new Date(this.schedule.trigger_at).getTime();
    const diff = Math.max(0, target - now);

    if (diff === 0) {
      this._remaining = '00:00';
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = undefined;
      }
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => String(n).padStart(2, '0');

    if (hours > 0) {
      this._remaining = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    } else {
      this._remaining = `${pad(minutes)}:${pad(seconds)}`;
    }
  }

  private _formatRecurring(): string {
    const d = new Date(this.schedule.trigger_at);
    const time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    const days = this.schedule.days_of_week;

    if (!days || days.length === 7) {
      return time;
    }

    // Convert JS getDay (0=Sun) to our index (0=Mon): (jsDay + 6) % 7
    const dayIndex = (d.getDay() + 6) % 7;
    const dayAbbr = localize(DAY_KEYS[dayIndex], this.lang);
    return `${dayAbbr} ${time}`;
  }

  private get _actionClass(): string {
    switch (this.schedule?.action) {
      case 'turn_on': return 'action-on';
      case 'turn_off': return 'action-off';
      case 'toggle': return 'action-toggle';
      default: return '';
    }
  }

  private _cancel() {
    this.dispatchEvent(
      new CustomEvent('timer-cancel', {
        detail: { scheduleId: this.schedule.id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private get _icon(): string {
    return this.schedule?.recurring ? 'mdi:calendar-clock' : 'mdi:timer-outline';
  }

  render() {
    if (this.compact) {
      return html`
        <span class="badge compact ${this._actionClass}" @click=${this._cancel}>
          <ha-icon icon=${this._icon}></ha-icon>
          ${this._remaining}
        </span>
      `;
    }

    return html`
      <span class="badge ${this._actionClass}" @click=${this._cancel}>
        <ha-icon icon=${this._icon}></ha-icon>
        ${this._remaining}
      </span>
    `;
  }

  static styles = css`
    :host {
      display: inline-flex;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 16px;
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    .badge:hover {
      opacity: 0.85;
    }
    .badge ha-icon {
      --mdc-icon-size: 14px;
    }
    .action-on { background: #4caf50; }
    .action-off { background: #f44336; }
    .action-toggle { background: #ff9800; }
    .compact {
      padding: 2px 8px;
      font-size: 11px;
    }
    .compact ha-icon {
      --mdc-icon-size: 12px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-timer-badge': TimerBadge;
  }
}
