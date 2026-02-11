import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Schedule } from '../../types';

@customElement('hac-timer-badge')
export class TimerBadge extends LitElement {
  @property({ attribute: false }) schedule!: Schedule;
  @property({ type: Boolean }) compact = false;

  @state() private _remaining = '';
  private _interval?: ReturnType<typeof setInterval>;

  connectedCallback() {
    super.connectedCallback();
    this._updateCountdown();
    this._interval = setInterval(() => this._updateCountdown(), 1000);
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

  render() {
    if (this.compact) {
      return html`
        <span class="badge compact ${this._actionClass}" @click=${this._cancel}>
          <ha-icon icon="mdi:timer-outline"></ha-icon>
          ${this._remaining}
        </span>
      `;
    }

    return html`
      <span class="badge ${this._actionClass}" @click=${this._cancel}>
        <ha-icon icon="mdi:timer-outline"></ha-icon>
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
