import { html, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { turnOn } from '../../../utils/ha-helper';
import { kelvinToRgb } from '../utils';

function buildColorTempGradient(minKelvin: number, maxKelvin: number): string {
  const stops = 5;
  const parts: string[] = [];
  for (let i = 0; i <= stops; i++) {
    const kelvin = minKelvin + (maxKelvin - minKelvin) * (i / stops);
    const [r, g, b] = kelvinToRgb(kelvin);
    parts.push(`rgb(${r}, ${g}, ${b})`);
  }
  return `linear-gradient(to right, ${parts.join(', ')})`;
}

export function renderColorTempControl(
  hass: HomeAssistant,
  entityId: string,
  colorTempKelvin: number,
  minKelvin: number,
  maxKelvin: number,
): TemplateResult {
  const handleChange = (e: CustomEvent) => {
    const color_temp_kelvin = e.detail.value;
    turnOn(hass, entityId, { color_temp_kelvin });
  };

  const gradient = buildColorTempGradient(minKelvin, maxKelvin);

  return html`
    <div class="control-row">
      <ha-icon icon="mdi:thermometer"></ha-icon>
      <hac-gradient-slider
        .value=${colorTempKelvin}
        .min=${minKelvin}
        .max=${maxKelvin}
        .step=${100}
        .gradient=${gradient}
        @value-changed=${handleChange}
      ></hac-gradient-slider>
      <span class="value">${colorTempKelvin}K</span>
    </div>
  `;
}
