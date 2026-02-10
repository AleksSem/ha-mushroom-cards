import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { getFilterColor } from '../../../utils/colors';
import { getEntityNumericState } from '../utils';

export function renderFilterBar(
  hass: HomeAssistant,
  filterLifeEntity: string | undefined,
  filterUsedTimeEntity: string | undefined,
  lang: string,
): TemplateResult | typeof nothing {
  const life = getEntityNumericState(hass, filterLifeEntity);
  const usedTime = getEntityNumericState(hass, filterUsedTimeEntity);

  if (life === undefined && usedTime === undefined) return nothing;

  const pct = life ?? 0;
  const color = getFilterColor(pct);

  return html`
    <div class="filter-section">
      <div class="filter-header">
        <span>${localize('filter.life', lang)}</span>
        <span>
          ${life !== undefined ? html`<span class="value">${Math.round(life)}%</span>` : ''}
          ${usedTime !== undefined
            ? html` · ${Math.round(usedTime)} ${localize('filter.hours', lang)}`
            : ''}
        </span>
      </div>
      ${life !== undefined
        ? html`<hac-progress-bar .value=${pct} .color=${color}></hac-progress-bar>`
        : nothing}
    </div>
  `;
}
