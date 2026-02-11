import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from '../../types';
import { TimerCardConfig } from './types';
import { EDITOR_TAG } from './const';
import { editorStyles } from '../../shared/styles/editor-styles';
import { computeLabel, fireConfigChanged } from '../../utils/editor-helpers';

const SCHEMA = [
  { name: 'entity', required: true, selector: { entity: {} } },
  { name: 'name', selector: { text: {} } },
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'show_name', selector: { boolean: {} } },
      { name: 'show_state', selector: { boolean: {} } },
      { name: 'show_presets', selector: { boolean: {} } },
    ],
  },
  {
    name: 'default_action',
    selector: {
      select: {
        options: [
          { value: 'turn_off', label: 'Turn Off' },
          { value: 'turn_on', label: 'Turn On' },
          { value: 'toggle', label: 'Toggle' },
        ],
      },
    },
  },
];

@customElement(EDITOR_TAG)
export class TimerCardEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: TimerCardConfig;

  setConfig(config: TimerCardConfig): void {
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
      show_presets: true,
      default_action: 'turn_off',
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
    [EDITOR_TAG]: TimerCardEditor;
  }
}
