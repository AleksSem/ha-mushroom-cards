import { html, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { turnOn } from '../../../utils/ha-helper';

export function renderBrightnessControl(
  hass: HomeAssistant,
  entityId: string,
  brightnessPercent: number,
): TemplateResult {
  const handleChange = (e: CustomEvent) => {
    const brightness_pct = e.detail.value;
    turnOn(hass, entityId, { brightness_pct });
  };

  return html`
    <div class="control-row">
      <ha-icon icon="mdi:brightness-6"></ha-icon>
      <hac-slider
        .value=${brightnessPercent}
        .min=${1}
        .max=${100}
        .step=${1}
        @value-changed=${handleChange}
      ></hac-slider>
      <span class="value">${brightnessPercent}%</span>
    </div>
  `;
}
