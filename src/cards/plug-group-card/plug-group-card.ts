import { LitElement, html, nothing, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { safeCustomElement } from '../../utils/safe-custom-element';
import { HomeAssistant, Schedule } from '../../types';
import { localize } from '../../localize';
import { cardStyles } from '../../shared/styles/card-styles';
import { PlugGroupCardConfig, ResolvedPlugDevice } from './types';
import { CARD_TAG, EDITOR_TAG, CARD_NAME, CARD_DESCRIPTION } from './const';
import { plugGroupCardStyles } from './styles';
import { resolveGroup, isAnyOn, countOn, getEntityNumericState, sumDeviceStat } from './utils';
import { registerCard } from '../../utils/register-card';
import { renderAggregatedStats } from './controls/aggregated-stats';
import { renderPlugList } from './controls/plug-list';
import { renderGroupSettings } from './controls/group-settings';
import { renderTimerButton, renderTimerDialog } from '../../shared/controls/timer-control';
import { schedulerManager } from '../../utils/scheduler-api';

import '../../shared/components/shape-icon';
import '../../shared/components/state-info';
import '../../shared/components/toggle-button';
import '../../shared/components/timer-badge';

import './plug-group-card-editor';

registerCard({
  type: CARD_TAG,
  name: CARD_NAME,
  description: CARD_DESCRIPTION,
});

@safeCustomElement(CARD_TAG)
export class PlugGroupCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: PlugGroupCardConfig;
  @state() private _timerDialogOpen = false;
  @state() private _schedules: Schedule[] = [];

  private _resolved?: ResolvedPlugDevice[];
  private _lastEntitiesKey?: string;
  private _schedulerUnsub?: () => void;
  private _schedulerConnected = false;

  static getConfigElement() {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig(hass: HomeAssistant) {
    const entities = Object.keys(hass.states).filter(
      e => e.startsWith('switch.')
    );
    return { entities: entities.slice(0, 2) };
  }

  setConfig(config: PlugGroupCardConfig): void {
    if (!config.entities || !Array.isArray(config.entities) || config.entities.length === 0) {
      throw new Error('At least one entity is required');
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

    for (const entityId of this._config.entities) {
      if (oldHass.states[entityId] !== this.hass.states[entityId]) return true;
    }

    const resolved = this._getResolved();
    for (const device of resolved) {
      for (const id of [device.power, device.dailyConsumption, device.monthlyConsumption, device.yearlyConsumption, device.childLock]) {
        if (id && oldHass.states[id] !== this.hass.states[id]) return true;
      }
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
      const primaryEntity = this._config.entities[0];
      this._schedulerUnsub = schedulerManager.subscribe(() => {
        this._schedules = schedulerManager.getSchedulesForEntity(primaryEntity);
      });
      schedulerManager.connect(this.hass);
      this._schedules = schedulerManager.getSchedulesForEntity(primaryEntity);
    }
  }

  private _getResolved(): ResolvedPlugDevice[] {
    const key = JSON.stringify(this._config.entities);
    if (!this._resolved || this._lastEntitiesKey !== key) {
      this._lastEntitiesKey = key;
      this._resolved = resolveGroup(this.hass, this._config.entities);
    }
    return this._resolved;
  }

  private get _lang(): string {
    return this.hass?.language || 'en';
  }

  private _handleMasterToggle() {
    const entities = this._config.entities;
    const service = isAnyOn(this.hass, entities) ? 'turn_off' : 'turn_on';
    this.hass.callService('switch', service, { entity_id: entities });
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    const validEntities = this._config.entities.filter(id => this.hass.states[id]);
    if (validEntities.length === 0) {
      return html`
        <ha-card>
          <div class="not-found">No entities found</div>
        </ha-card>
      `;
    }

    const resolved = this._getResolved();
    const active = isAnyOn(this.hass, this._config.entities);
    const name = this._config.name || localize('plug-group.card.name', this._lang);
    const lang = this._lang;
    const compact = this._config.compact_view;

    return html`
      <ha-card>
        <div class="container">
          ${this._renderHeader(active, name, lang, resolved)}
          ${!compact
            ? renderAggregatedStats(this.hass, resolved, lang, this._config)
            : nothing}
          ${!compact && this._config.show_individual !== false
            ? renderPlugList(this.hass, resolved, lang)
            : nothing}
          ${!compact && this._config.show_settings !== false
            ? renderGroupSettings(this.hass, resolved, lang)
            : nothing}
        </div>
        ${this._config.show_timer ? renderTimerDialog(
          this.hass,
          this._config.entities,
          name,
          this._timerDialogOpen,
          this._config.timer_default_action || 'turn_off',
          () => { this._timerDialogOpen = false; },
        ) : nothing}
      </ha-card>
    `;
  }

  private _renderHeader(
    active: boolean,
    name: string,
    lang: string,
    resolved: ResolvedPlugDevice[],
  ) {
    const onCount = countOn(this.hass, this._config.entities);
    const total = this._config.entities.length;
    const stateStr = active
      ? `${onCount} / ${total} ${localize('state.on', lang)}`
      : localize('state.off', lang);

    const totalPower = active ? sumDeviceStat(this.hass, resolved, 'power') : undefined;
    const secondary = active && totalPower !== undefined
      ? `${stateStr} \u00B7 ${Math.round(totalPower)} W`
      : stateStr;

    return html`
      <div class="header">
        <hac-shape-icon
          icon="mdi:power-plug"
          ?active=${active}
          .animated=${this._config.icon_animation !== false}
          @click=${() => this._handleMasterToggle()}
        ></hac-shape-icon>
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

  static styles = [cardStyles, plugGroupCardStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    [CARD_TAG]: PlugGroupCard;
  }
}
