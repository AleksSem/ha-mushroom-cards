import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, HassEntity, Schedule } from '../../types';
import { localize } from '../../localize';
import { cardStyles } from '../../shared/styles/card-styles';
import { TimerCardConfig } from './types';
import { CARD_TAG, EDITOR_TAG, CARD_NAME, CARD_DESCRIPTION } from './const';
import { timerCardStyles } from './styles';
import { registerCard } from '../../utils/register-card';
import { toggleEntity } from '../../utils/ha-helper';
import { schedulerManager } from '../../utils/scheduler-api';
import { getActionLabel, buildScheduleParams } from '../../utils/timer-utils';

import '../../shared/components/state-info';
import '../../shared/components/timer-picker';
import '../../shared/components/timer-badge';

import './timer-card-editor';

registerCard({
  type: CARD_TAG,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
});

@customElement(CARD_TAG)
export class TimerCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: TimerCardConfig;
  @state() private _schedules: Schedule[] = [];

  private _unsubscribe?: () => void;
  private _schedulerConnected = false;

  static getConfigElement() {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(hass: HomeAssistant) {
    const entities = Object.keys(hass.states);
    return { entity: entities[0] || '' };
  }

  setConfig(config: TimerCardConfig): void {
    if (!config.entity) {
      throw new Error('Entity is required');
    }
    this._config = {
      show_name: true,
      show_state: true,
      default_action: 'turn_off',
      show_presets: true,
      ...config,
    };
  }

  getCardSize(): number {
    return 4;
  }

  connectedCallback() {
    super.connectedCallback();
    this._unsubscribe = schedulerManager.subscribe(() => {
      this._schedules = schedulerManager.getSchedulesForEntity(
        this._config?.entity,
      );
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribe?.();
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config') || changedProps.has('_schedules'))
      return true;
    if (!changedProps.has('hass')) return true;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return true;

    const entityId = this._config.entity;
    return oldHass.states[entityId] !== this.hass.states[entityId];
  }

  updated(changedProps: PropertyValues) {
    if (changedProps.has('hass') && this.hass && !this._schedulerConnected) {
      this._schedulerConnected = true;
      schedulerManager.connect(this.hass);
      this._schedules = schedulerManager.getSchedulesForEntity(
        this._config.entity,
      );
    }
  }

  private get _lang(): string {
    return this.hass?.language || 'en';
  }

  private _togglePower() {
    toggleEntity(this.hass, this._config.entity);
  }

  private async _onTimerStart(e: CustomEvent) {
    const params = buildScheduleParams(this._config.entity, e.detail);
    if (
      e.detail.action === 'custom' &&
      this._config.custom_service
    ) {
      params.service = this._config.custom_service;
      params.service_data = this._config.custom_service_data;
    }
    await schedulerManager.createSchedule(this.hass, params);
  }

  private async _cancelSchedule(scheduleId: string) {
    await schedulerManager.cancelSchedule(this.hass, scheduleId);
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    const entity = this.hass.states[this._config.entity];
    if (!entity) {
      return html`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this._config.entity}
          </div>
        </ha-card>
      `;
    }

    const active = entity.state === 'on';
    const name =
      this._config.name || entity.attributes.friendly_name || 'Device';
    const lang = this._lang;
    const stateStr = active
      ? localize('state.on', lang)
      : localize('state.off', lang);

    const presets = this._config.show_presets !== false
      ? (this._config.presets || [300, 600, 900, 1800, 3600, 7200])
      : [];

    return html`
      <ha-card>
        <div class="container">
          ${this._renderHeader(entity, active, name, stateStr, lang)}

          <div class="timer-section">
            <hac-timer-picker
              .lang=${lang}
              .action=${this._config.default_action || 'turn_off'}
              .presets=${presets}
              @timer-start=${this._onTimerStart}
            ></hac-timer-picker>
          </div>

          ${this._renderActiveTimers(lang)}
        </div>
      </ha-card>
    `;
  }

  private _renderHeader(
    entity: HassEntity,
    active: boolean,
    name: string,
    stateStr: string,
    lang: string,
  ) {
    const timerInfo =
      this._schedules.length > 0 ? this._schedules[0] : null;

    let secondary = stateStr;
    if (timerInfo) {
      const actionLabel = getActionLabel(timerInfo.action, lang);
      secondary = `${stateStr} · ${actionLabel}`;
    }

    return html`
      <div class="header">
        <button
          class="power-btn ${active ? 'active' : ''}"
          @click=${this._togglePower}
        >
          <ha-icon icon="mdi:power"></ha-icon>
        </button>
        ${this._config.show_name !== false ||
        this._config.show_state !== false
          ? html`
              <hac-state-info
                .primary=${this._config.show_name !== false ? name : ''}
                .secondary=${this._config.show_state !== false
                  ? secondary
                  : ''}
              ></hac-state-info>
            `
          : nothing}
        ${timerInfo
          ? html`
              <hac-timer-badge
                .schedule=${timerInfo}
                compact
              ></hac-timer-badge>
            `
          : nothing}
      </div>
    `;
  }

  private _renderActiveTimers(lang: string) {
    return html`
      <div class="active-timers">
        <div class="active-timers-title">
          ${localize('timer.active', lang)}
        </div>
        ${this._schedules.length > 0
          ? this._schedules.map(
              (s) => html`
                <div class="timer-item">
                  <hac-timer-badge .schedule=${s}></hac-timer-badge>
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
            )
          : html`
              <div class="no-active">
                ${localize('timer.no_active', lang)}
              </div>
            `}
      </div>
    `;
  }

  static styles = [cardStyles, timerCardStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: TimerCard;
  }
}
