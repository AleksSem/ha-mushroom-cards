import { LitElement, html, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { safeCustomElement } from '../../utils/safe-custom-element';
import { HomeAssistant, HassEntity, Schedule } from '../../types';
import { localize } from '../../localize';
import { cardStyles } from '../../shared/styles/card-styles';
import { PlugCardConfig } from './types';
import { CARD_TAG, EDITOR_TAG, CARD_NAME, CARD_DESCRIPTION } from './const';
import { plugCardStyles } from './styles';
import {
  resolveEntities,
  ResolvedEntities,
  isEntityOn,
  getEntityNumericState,
} from './utils';
import { registerCard } from '../../utils/register-card';
import { renderPowerControl } from './controls/power-control';
import { renderStatsRow } from './controls/stats-row';
import { renderSettingsRow } from './controls/settings-row';
import { renderTimerButton, renderTimerDialog } from '../../shared/controls/timer-control';
import { schedulerManager } from '../../utils/scheduler-api';

// Import shared components so they register
import '../../shared/components/shape-icon';
import '../../shared/components/state-info';
import '../../shared/components/toggle-button';
import '../../shared/components/timer-badge';

// Import editor
import './plug-card-editor';

registerCard({
  type: CARD_TAG,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
});

@safeCustomElement(CARD_TAG)
export class PlugCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: PlugCardConfig;
  @state() private _timerDialogOpen = false;
  @state() private _schedules: Schedule[] = [];

  private _resolved?: ResolvedEntities;
  private _lastEntity?: string;
  private _schedulerUnsub?: () => void;
  private _schedulerConnected = false;

  static getConfigElement() {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(hass: HomeAssistant) {
    const entities = Object.keys(hass.states).filter(
      e => e.startsWith('switch.')
    );
    return { entity: entities[0] || '' };
  }

  setConfig(config: PlugCardConfig): void {
    if (!config.entity) {
      throw new Error('Entity is required');
    }
    this._config = config;
  }

  getCardSize(): number {
    return this._config?.compact_view ? 2 : 4;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._schedulerUnsub?.();
  }

  shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config') || changedProps.has('_timerDialogOpen') || changedProps.has('_schedules')) return true;
    if (!changedProps.has('hass')) return true;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass) return true;

    const entityId = this._config.entity;
    if (oldHass.states[entityId] !== this.hass.states[entityId]) return true;

    const resolved = this._getResolved();
    for (const id of Object.values(resolved)) {
      if (id && oldHass.states[id] !== this.hass.states[id]) return true;
    }

    return false;
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

  private _getResolved(): ResolvedEntities {
    if (!this._resolved || this._lastEntity !== this._config.entity) {
      this._lastEntity = this._config.entity;
      this._resolved = resolveEntities(this.hass, this._config);
    }
    return this._resolved;
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

    const resolved = this._getResolved();
    const active = isEntityOn(entity);
    const name = this._config.name || entity.attributes.friendly_name || 'Plug';
    const lang = this._lang;
    const compact = this._config.compact_view;

    return html`
      <ha-card>
        <div class="container">
          ${this._renderHeader(entity, active, name, lang, resolved)}
          ${!compact
            ? renderStatsRow(this.hass, resolved, lang, this._config)
            : nothing}
          ${!compact && this._config.show_settings !== false
            ? renderSettingsRow(this.hass, resolved.childLock, lang)
            : nothing}
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
    resolved: ResolvedEntities,
  ) {
    const stateStr = active
      ? localize('state.on', lang)
      : localize('state.off', lang);

    const power = active ? getEntityNumericState(this.hass, resolved.power) : undefined;
    const secondary = active && power !== undefined
      ? `${stateStr} · ${Math.round(power)} W`
      : stateStr;

    return html`
      <div class="header">
        ${renderPowerControl(this.hass, this._config.entity, active, this._config.icon_animation !== false)}
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
              lang,
            )
          : nothing}
      </div>
    `;
  }

  static styles = [cardStyles, plugCardStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: PlugCard;
  }
}
