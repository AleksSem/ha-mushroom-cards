import { html, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { turnOn } from '../../../utils/ha-helper';
import { hsvToRgb } from '../utils';

const HUE_GRADIENT = 'linear-gradient(to right, ' +
  'hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), ' +
  'hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), ' +
  'hsl(360, 100%, 50%))';

export function renderColorControl(
  hass: HomeAssistant,
  entityId: string,
  currentHue: number,
): TemplateResult {
  const handleChange = (e: CustomEvent) => {
    const hue = e.detail.value;
    const [r, g, b] = hsvToRgb(hue, 100, 100);
    turnOn(hass, entityId, { rgb_color: [r, g, b] });
  };

  return html`
    <div class="control-row">
      <ha-icon icon="mdi:palette"></ha-icon>
      <hac-gradient-slider
        .value=${currentHue}
        .min=${0}
        .max=${360}
        .step=${1}
        .gradient=${HUE_GRADIENT}
        @value-changed=${handleChange}
      ></hac-gradient-slider>
      <span class="value">${Math.round(currentHue)}°</span>
    </div>
  `;
}
