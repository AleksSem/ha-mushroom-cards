import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from '../../types';
import { PlugCardConfig } from './types';
import { EDITOR_TAG } from './const';
import { localize } from '../../localize';
import { editorStyles } from '../../shared/styles/editor-styles';
import { computeLabel, fireConfigChanged } from '../../utils/editor-helpers';
import { resolveEntities } from './utils';

const MAIN_SCHEMA = [
  { name: 'entity', required: true, selector: { entity: { domain: 'switch' } } },
  { name: 'name', selector: { text: {} } },
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'show_name', selector: { boolean: {} } },
      { name: 'show_state', selector: { boolean: {} } },
      { name: 'show_power', selector: { boolean: {} } },
      { name: 'show_daily_consumption', selector: { boolean: {} } },
      { name: 'show_monthly_consumption', selector: { boolean: {} } },
      { name: 'show_yearly_consumption', selector: { boolean: {} } },
      { name: 'show_settings', selector: { boolean: {} } },
      { name: 'icon_animation', selector: { boolean: {} } },
      { name: 'compact_view', selector: { boolean: {} } },
      { name: 'show_timer', selector: { boolean: {} } },
    ],
  },
];

const ENTITY_OVERRIDE_SCHEMA = [
  { name: 'power_entity', selector: { entity: { domain: 'sensor' } } },
  { name: 'daily_consumption_entity', selector: { entity: { domain: 'sensor' } } },
  { name: 'monthly_consumption_entity', selector: { entity: { domain: 'sensor' } } },
  { name: 'yearly_consumption_entity', selector: { entity: { domain: 'sensor' } } },
  { name: 'child_lock_entity', selector: { entity: { domain: 'switch' } } },
  { name: 'power_on_behavior_entity', selector: { entity: { domain: 'select' } } },
];

@customElement(EDITOR_TAG)
export class PlugCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: PlugCardConfig;
  @state() private _expandedOverrides = false;

  setConfig(config: PlugCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (schema: any): string => computeLabel(this.hass, schema);

  private _valueChanged(ev: CustomEvent): void {
    fireConfigChanged(this, ev.detail.value);
  }

  private _overrideValueChanged(ev: CustomEvent): void {
    fireConfigChanged(this, { ...this._config, ...ev.detail.value });
  }

  private _toggleOverrides(): void {
    this._expandedOverrides = !this._expandedOverrides;
  }

  private _powerOnBehaviorChanged(ev: Event): void {
    const select = ev.target as any;
    const entityId = this._resolvedEntities.powerOnBehavior;
    if (!entityId || !select.value) return;
    this.hass.callService('select', 'select_option', {
      entity_id: entityId,
      option: select.value,
    });
  }

  private _childLockChanged(): void {
    const entityId = this._resolvedEntities.childLock;
    if (!entityId) return;
    this.hass.callService('switch', 'toggle', { entity_id: entityId });
  }

  private get _resolvedEntities(): ReturnType<typeof resolveEntities> {
    return resolveEntities(this.hass, this._config);
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    const lang = this.hass.language || 'en';

    const data = {
      show_name: true,
      show_state: true,
      show_power: true,
      show_daily_consumption: true,
      show_monthly_consumption: true,
      show_yearly_consumption: true,
      show_settings: true,
      compact_view: false,
      icon_animation: true,
      ...this._config,
    };

    const resolved = this._resolvedEntities;

    const childLockEntityId = resolved.childLock;
    const childLockOn = childLockEntityId
      ? this.hass.states[childLockEntityId]?.state === 'on'
      : false;

    const powerOnEntityId = resolved.powerOnBehavior;
    const powerOnEntity = powerOnEntityId ? this.hass.states[powerOnEntityId] : undefined;
    const powerOnOptions = (powerOnEntity?.attributes.options as string[]) || [];
    const powerOnValue = powerOnEntity?.state;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${MAIN_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      ${powerOnOptions.length > 0 ? html`
        <ha-select
          .label=${localize('editor.power_on_behavior', lang)}
          .value=${powerOnValue}
          @selected=${this._powerOnBehaviorChanged}
        >
          ${powerOnOptions.map(opt => html`<mwc-list-item .value=${opt}>${opt}</mwc-list-item>`)}
        </ha-select>
      ` : nothing}

      ${childLockEntityId ? html`
        <ha-formfield .label=${localize('settings.child_lock', lang)}>
          <ha-switch
            .checked=${childLockOn}
            @change=${this._childLockChanged}
          ></ha-switch>
        </ha-formfield>
      ` : nothing}

      <div class="overrides-section">
        <button class="overrides-toggle" @click=${this._toggleOverrides}>
          <ha-icon icon=${this._expandedOverrides ? 'mdi:chevron-up' : 'mdi:chevron-down'}></ha-icon>
          ${localize('editor.entity_overrides', lang)}
        </button>
        ${this._expandedOverrides ? html`
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${ENTITY_OVERRIDE_SCHEMA}
            .computeLabel=${this._computeLabel}
            @value-changed=${this._overrideValueChanged}
          ></ha-form>
        ` : nothing}
      </div>
    `;
  }

  static styles = [editorStyles, css`
    ha-formfield {
      display: block;
      margin-top: 16px;
    }
    .overrides-section {
      margin-top: 16px;
    }
    .overrides-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      padding: 8px 0;
      border: none;
      background: none;
      color: var(--primary-text-color);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      outline: none;
    }
    .overrides-toggle ha-icon {
      --mdc-icon-size: 20px;
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: PlugCardEditor;
  }
}
