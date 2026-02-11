import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { toggleEntity } from '../../../utils/ha-helper';

export function renderSettingsRow(
  hass: HomeAssistant,
  childLockEntity: string | undefined,
  lang: string,
): TemplateResult | typeof nothing {
  if (!childLockEntity || !hass.states[childLockEntity]) return nothing;

  const active = hass.states[childLockEntity]?.state === 'on';

  return html`
    <div class="settings-row">
      <hac-toggle-button
        .icon=${'mdi:lock'}
        ?active=${active}
        .label=${localize('settings.child_lock', lang)}
        @toggle=${() => toggleEntity(hass, childLockEntity)}
      ></hac-toggle-button>
    </div>
  `;
}
