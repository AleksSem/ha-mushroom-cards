import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { toggleEntity } from '../../../utils/ha-helper';
import { ResolvedPlugDevice } from '../types';
import { getEntityNumericState } from '../utils';

export function renderPlugList(
  hass: HomeAssistant,
  devices: ResolvedPlugDevice[],
  lang: string,
): TemplateResult | typeof nothing {
  if (devices.length === 0) return nothing;

  return html`
    <div class="plug-list">
      ${devices.map(device => {
        const entity = hass.states[device.entityId];
        if (!entity) return nothing;

        const isOn = entity.state === 'on';
        const power = isOn ? getEntityNumericState(hass, device.power) : undefined;
        const powerStr = power !== undefined ? `${Math.round(power)} W` : '';
        const stateStr = isOn ? powerStr || localize('state.on', lang) : localize('state.off', lang);

        return html`
          <div class="plug-row" @click=${() => toggleEntity(hass, device.entityId)}>
            <span class="plug-dot ${isOn ? 'on' : ''}"></span>
            <span class="plug-name">${device.name}</span>
            <span class="plug-power">${stateStr}</span>
          </div>
        `;
      })}
    </div>
  `;
}
