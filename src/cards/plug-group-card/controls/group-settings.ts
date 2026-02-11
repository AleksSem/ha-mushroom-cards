import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { ResolvedPlugDevice } from '../types';

export function renderGroupSettings(
  hass: HomeAssistant,
  devices: ResolvedPlugDevice[],
  lang: string,
): TemplateResult | typeof nothing {
  const childLockIds = devices
    .map(d => d.childLock)
    .filter((id): id is string => !!id && !!hass.states[id]);

  if (childLockIds.length === 0) return nothing;

  const anyOff = childLockIds.some(id => hass.states[id]?.state !== 'on');

  const handleToggle = () => {
    const service = anyOff ? 'turn_on' : 'turn_off';
    hass.callService('switch', service, { entity_id: childLockIds });
  };

  const allOn = !anyOff;

  return html`
    <div class="settings-row">
      <hac-toggle-button
        .icon=${'mdi:lock'}
        ?active=${allOn}
        .label=${localize('settings.child_lock', lang)}
        @toggle=${handleToggle}
      ></hac-toggle-button>
    </div>
  `;
}
