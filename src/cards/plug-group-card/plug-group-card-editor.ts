import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from '../../types';
import { PlugGroupCardConfig } from './types';
import { EDITOR_TAG } from './const';
import { localize } from '../../localize';
import { editorStyles } from '../../shared/styles/editor-styles';
import { computeLabel, fireConfigChanged } from '../../utils/editor-helpers';
import { resolveGroup } from './utils';

const MAIN_SCHEMA = [
  {
    name: 'entities',
    required: true,
    selector: { entity: { domain: 'switch', multiple: true } },
  },
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
      { name: 'show_individual', selector: { boolean: {} } },
      { name: 'icon_animation', selector: { boolean: {} } },
      { name: 'compact_view', selector: { boolean: {} } },
      { name: 'show_timer', selector: { boolean: {} } },
    ],
  },
];

@customElement(EDITOR_TAG)
export class PlugGroupCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: PlugGroupCardConfig;

  setConfig(config: PlugGroupCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (schema: any): string => {
    if (schema.name === 'entities') return localize('editor.entities', this.hass?.language || 'en');
    if (schema.name === 'show_individual') return localize('editor.show_individual', this.hass?.language || 'en');
    return computeLabel(this.hass, schema);
  };

  private _valueChanged(ev: CustomEvent): void {
    fireConfigChanged(this, ev.detail.value);
  }

  private _powerOnBehaviorChanged(ev: Event, entityId: string): void {
    const select = ev.target as any;
    if (!select.value) return;
    this.hass.callService('select', 'select_option', {
      entity_id: entityId,
      option: select.value,
    });
  }

  private _childLockChanged(entityId: string): void {
    this.hass.callService('switch', 'toggle', { entity_id: entityId });
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
      show_individual: true,
      compact_view: false,
      icon_animation: true,
      ...this._config,
    };

    const entities = this._config.entities || [];
    const resolved = entities.length > 0 ? resolveGroup(this.hass, entities) : [];

    const devicesWithControls = resolved.filter(d => d.powerOnBehavior || d.childLock);

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${MAIN_SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>

      ${devicesWithControls.length > 0 ? html`
        <div class="device-controls">
          <div class="device-controls-title">${localize('editor.device_controls', lang)}</div>
          ${devicesWithControls.map(device => {
            const powerOnEntityId = device.powerOnBehavior;
            const powerOnEntity = powerOnEntityId ? this.hass.states[powerOnEntityId] : undefined;
            const powerOnOptions = (powerOnEntity?.attributes.options as string[]) || [];
            const powerOnValue = powerOnEntity?.state;

            const childLockEntityId = device.childLock;
            const childLockOn = childLockEntityId
              ? this.hass.states[childLockEntityId]?.state === 'on'
              : false;

            return html`
              <div class="device-row">
                <span class="device-name">${device.name}</span>
                <div class="device-actions">
                  ${powerOnOptions.length > 0 ? html`
                    <ha-select
                      .label=${localize('editor.power_on_behavior', lang)}
                      .value=${powerOnValue}
                      @selected=${(ev: Event) => this._powerOnBehaviorChanged(ev, powerOnEntityId!)}
                    >
                      ${powerOnOptions.map(opt => html`<mwc-list-item .value=${opt}>${opt}</mwc-list-item>`)}
                    </ha-select>
                  ` : nothing}
                  ${childLockEntityId ? html`
                    <ha-formfield .label=${localize('settings.child_lock', lang)}>
                      <ha-switch
                        .checked=${childLockOn}
                        @change=${() => this._childLockChanged(childLockEntityId)}
                      ></ha-switch>
                    </ha-formfield>
                  ` : nothing}
                </div>
              </div>
            `;
          })}
        </div>
      ` : nothing}
    `;
  }

  static styles = [editorStyles, css`
    .device-controls {
      margin-top: 16px;
    }
    .device-controls-title {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
    }
    .device-row {
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.12));
    }
    .device-row:last-child {
      border-bottom: none;
    }
    .device-name {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      display: block;
      margin-bottom: 4px;
    }
    .device-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    ha-formfield {
      min-height: 20px;
    }
  `];
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: PlugGroupCardEditor;
  }
}
