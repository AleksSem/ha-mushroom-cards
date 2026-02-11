import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, HassEntity, Schedule } from '../../types';
import { localize } from '../../localize';
import { cardStyles } from '../../shared/styles/card-styles';
import { AirPurifierCardConfig } from './types';
import { CARD_TAG, EDITOR_TAG, CARD_NAME, CARD_DESCRIPTION } from './const';
import { airPurifierCardStyles } from './styles';
import {
  resolveEntities,
  ResolvedEntities,
  getPresetModes,
  getActivePreset,
  isEntityOn,
} from './utils';
import { registerCard } from '../../utils/register-card';
import { renderPowerControl } from './controls/power-control';
import { renderPresetControl } from './controls/preset-control';
import { renderStatsRow } from './controls/stats-row';
import { renderFavoriteControl } from './controls/favorite-level-control';
import { renderFilterBar } from './controls/filter-bar';
import { renderSettingsRow } from './controls/settings-row';
import { renderTimerButton, renderTimerDialog } from '../../shared/controls/timer-control';
import { schedulerManager } from '../../utils/scheduler-api';

// Import shared components so they register
import '../../shared/components/shape-icon';
import '../../shared/components/state-info';
import '../../shared/components/state-item';
import '../../shared/components/slider';
import '../../shared/components/progress-bar';
import '../../shared/components/toggle-button';
import '../../shared/components/timer-badge';

// Import editor
import './air-purifier-card-editor';

registerCard({
  type: CARD_TAG,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
});

@customElement(CARD_TAG)
export class AirPurifierCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: AirPurifierCardConfig;
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
      e => e.startsWith('fan.') && hass.states[e].attributes.preset_modes
    );
    return { entity: entities[0] || '' };
  }

  setConfig(config: AirPurifierCardConfig): void {
    if (!config.entity) {
      throw new Error('Entity is required');
    }
    this._config = {
      show_name: true,
      show_state: true,
      show_toolbar: true,
      show_stats: true,
      show_settings: true,
      show_filter_info: true,
      compact_view: false,
      icon_animation: true,
      ...config,
    };
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

    // Check if relevant entities changed
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
    const name = this._config.name || entity.attributes.friendly_name || 'Air Purifier';
    const presets = getPresetModes(entity);
    const activePreset = getActivePreset(entity);
    const isFavorite = activePreset?.toLowerCase() === 'favorite';
    const lang = this._lang;
    const compact = this._config.compact_view;

    return html`
      <ha-card>
        <div class="container">
          ${this._renderHeader(entity, active, name, lang)}
          ${!compact && this._config.show_stats
            ? renderStatsRow(this.hass, resolved, lang)
            : nothing}
          ${this._config.show_toolbar
            ? renderPresetControl(this.hass, this._config.entity, presets, activePreset, active)
            : nothing}
          ${active && isFavorite
            ? renderFavoriteControl(this.hass, resolved.favoriteLevel)
            : nothing}
          ${!compact && this._config.show_filter_info
            ? renderFilterBar(this.hass, resolved.filterLife, resolved.filterUsedTime, lang)
            : nothing}
          ${!compact && this._config.show_settings
            ? renderSettingsRow(this.hass, resolved.childLock, resolved.led, resolved.buzzer, lang)
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
  ) {
    const stateStr = active
      ? localize('state.on', lang)
      : localize('state.off', lang);

    const preset = active ? getActivePreset(entity) : undefined;
    const secondary = preset ? `${stateStr} · ${preset}` : stateStr;

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
            )
          : nothing}
      </div>
    `;
  }

  static styles = [cardStyles, airPurifierCardStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: AirPurifierCard;
  }
}
