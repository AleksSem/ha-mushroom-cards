import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, HassEntity, Schedule } from '../../types';
import { localize } from '../../localize';
import { cardStyles } from '../../shared/styles/card-styles';
import { LightCardConfig } from './types';
import { CARD_TAG, EDITOR_TAG, CARD_NAME, CARD_DESCRIPTION } from './const';
import { lightCardStyles } from './styles';
import {
  isLightOn,
  supportsBrightness,
  supportsColorTemp,
  supportsColor,
  getBrightnessPercent,
  getColorTempKelvin,
  getColorTempRange,
  getHsColor,
} from './utils';
import { registerCard } from '../../utils/register-card';
import { renderPowerControl } from './controls/power-control';
import { renderBrightnessControl } from './controls/brightness-control';
import { renderColorTempControl } from './controls/color-temp-control';
import { renderColorControl } from './controls/color-control';
import { renderTimerButton, renderTimerDialog } from '../../shared/controls/timer-control';
import { schedulerManager } from '../../utils/scheduler-api';

// Import shared components so they register
import '../../shared/components/shape-icon';
import '../../shared/components/state-info';
import '../../shared/components/slider';
import '../../shared/components/gradient-slider';
import '../../shared/components/timer-badge';

// Import editor
import './light-card-editor';

registerCard({
  type: CARD_TAG,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
});

@customElement(CARD_TAG)
export class LightCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: LightCardConfig;
  @state() private _timerDialogOpen = false;
  @state() private _schedules: Schedule[] = [];

  private _schedulerUnsub?: () => void;
  private _schedulerConnected = false;

  disconnectedCallback() {
    super.disconnectedCallback();
    this._schedulerUnsub?.();
  }

  static getConfigElement() {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(hass: HomeAssistant) {
    const entities = Object.keys(hass.states).filter(
      e => e.startsWith('light.')
    );
    return { entity: entities[0] || '' };
  }

  setConfig(config: LightCardConfig): void {
    if (!config.entity) {
      throw new Error('Entity is required');
    }
    this._config = {
      show_name: true,
      show_state: true,
      show_brightness_control: true,
      show_color_temp_control: true,
      show_color_control: true,
      use_light_color: true,
      icon_animation: true,
      compact_view: false,
      hide_controls_when_off: true,
      ...config,
    };
  }

  getCardSize(): number {
    return this._config?.compact_view ? 1 : 3;
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config') || changedProps.has('_timerDialogOpen') || changedProps.has('_schedules')) return true;
    if (!changedProps.has('hass')) return true;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return true;

    const entityId = this._config.entity;
    return oldHass.states[entityId] !== this.hass.states[entityId];
  }

  updated(changedProps: PropertyValues) {
    if (
      changedProps.has('hass') &&
      this.hass &&
      !this._schedulerConnected &&
      this._config?.show_timer
    ) {
      this._schedulerConnected = true;
      this._schedulerUnsub = schedulerManager.subscribe(() => {
        this._schedules = schedulerManager.getSchedulesForEntity(
          this._config?.entity,
        );
      });
      schedulerManager.connect(this.hass);
      this._schedules = schedulerManager.getSchedulesForEntity(
        this._config.entity,
      );
    }
  }

  private get _lang(): string {
    return this.hass?.language || 'en';
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    const entity = this.hass.states[this._config.entity];
    if (!entity) {
      return html`
        <ha-card>
          <div class="not-found">Entity not found: ${this._config.entity}</div>
        </ha-card>
      `;
    }

    const active = isLightOn(entity);
    const name = this._config.name || entity.attributes.friendly_name || 'Light';
    const lang = this._lang;
    const compact = this._config.compact_view;

    return html`
      <ha-card>
        <div class="container">
          ${this._renderHeader(entity, active, name, lang)}
          ${!compact && (active || this._config.hide_controls_when_off === false) ? this._renderControls(entity) : nothing}
        </div>
        ${this._config.show_timer ? renderTimerDialog(
          this.hass,
          this._config.entity,
          name,
          this._timerDialogOpen,
          this._config.timer_default_action || 'turn_off',
          () => { this._timerDialogOpen = false; },
        ) : nothing}
      </ha-card>
    `;
  }

  private _renderHeader(
    entity: HassEntity,
    active: boolean,
    name: string,
    lang: string,
  ) {
    const stateStr = active
      ? localize('state.on', lang)
      : localize('state.off', lang);

    const brightness = active ? getBrightnessPercent(entity) : 0;
    const secondary = active && brightness
      ? `${stateStr} · ${brightness}%`
      : stateStr;

    return html`
      <div class="header">
        ${renderPowerControl(
          this.hass,
          this._config.entity,
          entity,
          active,
          this._config.icon_animation !== false,
          this._config.use_light_color !== false,
        )}
        ${this._config.show_name !== false || this._config.show_state !== false
          ? html`
            <hac-state-info
              .primary=${this._config.show_name !== false ? name : ''}
              .secondary=${this._config.show_state !== false ? secondary : ''}
            ></hac-state-info>
          `
          : nothing}
        ${this._config.show_timer
          ? renderTimerButton(
              this._schedules,
              () => { this._timerDialogOpen = true; },
            )
          : nothing}
      </div>
    `;
  }

  private _renderControls(entity: HassEntity) {
    const entityId = this._config.entity;

    return html`
      ${this._config.show_brightness_control !== false && supportsBrightness(entity)
        ? renderBrightnessControl(this.hass, entityId, getBrightnessPercent(entity))
        : nothing}
      ${this._config.show_color_temp_control !== false && supportsColorTemp(entity)
        ? this._renderColorTemp(entity, entityId)
        : nothing}
      ${this._config.show_color_control !== false && supportsColor(entity)
        ? renderColorControl(this.hass, entityId, getHsColor(entity)?.[0] ?? 0)
        : nothing}
    `;
  }

  private _renderColorTemp(entity: HassEntity, entityId: string) {
    const { min, max } = getColorTempRange(entity);
    return renderColorTempControl(
      this.hass,
      entityId,
      getColorTempKelvin(entity),
      min,
      max,
    );
  }

  static styles = [cardStyles, lightCardStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: LightCard;
  }
}
