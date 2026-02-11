import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';

export function renderPowerOnBehavior(
  hass: HomeAssistant,
  entityId: string | undefined,
  options: string[],
  active: string | undefined,
  lang: string,
): TemplateResult | typeof nothing {
  if (!entityId || options.length === 0) return nothing;

  const handleSelect = (option: string) => {
    hass.callService('select', 'select_option', {
      entity_id: entityId,
      option,
    });
  };

  return html`
    <div class="toolbar-section">
      <div class="toolbar-label">${localize('settings.power_on_behavior', lang)}</div>
      <div class="toolbar">
        ${options.map(option => html`
          <button
            class=${active === option ? 'active' : ''}
            @click=${() => handleSelect(option)}
          >${option}</button>
        `)}
      </div>
    </div>
  `;
}
