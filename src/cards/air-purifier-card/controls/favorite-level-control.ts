import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { setNumber } from '../../../utils/ha-helper';
import { getEntityNumericState } from '../utils';

export function renderFavoriteControl(
  hass: HomeAssistant,
  favoriteLevelEntity: string | undefined,
): TemplateResult | typeof nothing {
  if (!favoriteLevelEntity) return nothing;

  const entity = hass.states[favoriteLevelEntity];
  if (!entity) return nothing;

  const value = getEntityNumericState(hass, favoriteLevelEntity) ?? 0;
  const min = (entity.attributes.min as number) ?? 0;
  const max = (entity.attributes.max as number) ?? 14;
  const step = (entity.attributes.step as number) ?? 1;

  const handleChange = (e: CustomEvent) => {
    setNumber(hass, favoriteLevelEntity, e.detail.value);
  };

  return html`
    <div class="favorite-row">
      <hac-slider
        .value=${value}
        .min=${min}
        .max=${max}
        .step=${step}
        @value-changed=${handleChange}
      ></hac-slider>
      <span class="favorite-label">${Math.round(value)}</span>
    </div>
  `;
}
