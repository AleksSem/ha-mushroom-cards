import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { toggleEntity } from '../../../utils/ha-helper';

interface SettingItem {
  entityId: string | undefined;
  icon: string;
  labelKey: string;
}

function isActive(hass: HomeAssistant, entityId: string): boolean {
  const entity = hass.states[entityId];
  return entity?.state === 'on';
}

export function renderSettingsRow(
  hass: HomeAssistant,
  childLockEntity: string | undefined,
  ledEntity: string | undefined,
  buzzerEntity: string | undefined,
  lang: string,
): TemplateResult | typeof nothing {
  const items: SettingItem[] = [
    { entityId: childLockEntity, icon: 'mdi:lock', labelKey: 'settings.child_lock' },
    { entityId: ledEntity, icon: 'mdi:lightbulb-outline', labelKey: 'settings.led' },
    { entityId: buzzerEntity, icon: 'mdi:volume-high', labelKey: 'settings.buzzer' },
  ];

  const available = items.filter(i => i.entityId && hass.states[i.entityId!]);

  if (available.length === 0) return nothing;

  return html`
    <div class="settings-row">
      ${available.map(item => html`
        <hac-toggle-button
          .icon=${item.icon}
          ?active=${isActive(hass, item.entityId!)}
          .label=${localize(item.labelKey, lang)}
          @toggle=${() => toggleEntity(hass, item.entityId!)}
        ></hac-toggle-button>
      `)}
    </div>
  `;
}
