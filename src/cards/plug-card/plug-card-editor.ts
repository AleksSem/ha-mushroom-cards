import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from '../../types';
import { PlugCardConfig } from './types';
import { EDITOR_TAG } from './const';
import { localize } from '../../localize';
import { editorStyles } from '../../shared/styles/editor-styles';
import { computeLabel, fireConfigChanged } from '../../utils/editor-helpers';

const MAIN_SCHEMA = [
  { name: 'entity', required: true, selector: { entity: { domain: 'switch' } } },
  { name: 'name', selector: { text: {} } },
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'show_name', selector: { boolean: {} } },
      { name: 'show_state', selector: { boolean: {} } },
      { name: 'show_stats', selector: { boolean: {} } },
      { name: 'show_power_on_behavior', selector: { boolean: {} } },
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

  render() {
    if (!this.hass || !this._config) return nothing;

    const lang = this.hass.language || 'en';

    const data = {
      show_name: true,
      show_state: true,
      show_stats: true,
      show_power_on_behavior: true,
      show_settings: true,
      compact_view: false,
      icon_animation: true,
      ...this._config,
    };

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${MAIN_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

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
