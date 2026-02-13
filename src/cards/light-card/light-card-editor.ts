import { LitElement, html, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { safeCustomElement } from '../../utils/safe-custom-element';
import { HomeAssistant } from '../../types';
import { LightCardConfig } from './types';
import { EDITOR_TAG } from './const';
import { editorStyles } from '../../shared/styles/editor-styles';
import { computeLabel, fireConfigChanged } from '../../utils/editor-helpers';

const SCHEMA = [
  { name: 'entity', required: true, selector: { entity: { domain: 'light' } } },
  { name: 'name', selector: { text: {} } },
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'show_name', selector: { boolean: {} } },
      { name: 'show_state', selector: { boolean: {} } },
      { name: 'show_brightness_control', selector: { boolean: {} } },
      { name: 'show_color_temp_control', selector: { boolean: {} } },
      { name: 'show_color_control', selector: { boolean: {} } },
      { name: 'use_light_color', selector: { boolean: {} } },
      { name: 'icon_animation', selector: { boolean: {} } },
      { name: 'compact_view', selector: { boolean: {} } },
      { name: 'hide_controls_when_off', selector: { boolean: {} } },
      { name: 'show_timer', selector: { boolean: {} } },
    ],
  },
];

@safeCustomElement(EDITOR_TAG)
export class LightCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: LightCardConfig;

  setConfig(config: LightCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (schema: any): string => computeLabel(this.hass, schema);

  private _valueChanged(ev: CustomEvent): void {
    fireConfigChanged(this, ev.detail.value);
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    const data = {
      show_name: true,
      show_state: true,
      show_brightness_control: true,
      show_color_temp_control: true,
      show_color_control: true,
      use_light_color: true,
      icon_animation: true,
      compact_view: false,
      hide_controls_when_off: true,
      ...this._config,
    };

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  static styles = editorStyles;
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: LightCardEditor;
  }
}
