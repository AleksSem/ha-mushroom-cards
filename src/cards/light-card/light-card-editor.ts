import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from '../../types';
import { LightCardConfig } from './types';
import { EDITOR_TAG } from './const';
import { localize } from '../../localize';

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
    ],
  },
];

@customElement(EDITOR_TAG)
export class LightCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: LightCardConfig;

  setConfig(config: LightCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (schema: any): string => {
    const lang = this.hass?.language || 'en';
    return localize(`editor.${schema.name}`, lang) || schema.name;
  };

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
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

  static styles = css`
    :host {
      display: block;
      --ha-space-6: 4px;
    }
    ha-selector-boolean {
      display: flex;
      justify-content: flex-start;
    }
    ha-formfield {
      min-height: 20px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    [EDITOR_TAG]: LightCardEditor;
  }
}
