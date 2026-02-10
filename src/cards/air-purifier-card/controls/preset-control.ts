import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { setPresetMode, turnOn } from '../../../utils/ha-helper';

const PRESET_ICONS: Record<string, string> = {
  auto: 'mdi:fan-auto',
  silent: 'mdi:fan-minus',
  favorite: 'mdi:heart',
  low: 'mdi:fan-speed-1',
  medium: 'mdi:fan-speed-2',
  high: 'mdi:fan-speed-3',
};

export function renderPresetControl(
  hass: HomeAssistant,
  entityId: string,
  presets: string[],
  activePreset: string | undefined,
  isOn: boolean,
): TemplateResult | typeof nothing {
  if (presets.length === 0) return nothing;

  const handlePreset = (preset: string) => {
    if (!isOn) {
      turnOn(hass, entityId);
    }
    setPresetMode(hass, entityId, preset);
  };

  return html`
    <div class="toolbar">
      ${presets.map(preset => {
        const isActive = activePreset?.toLowerCase() === preset.toLowerCase();
        return html`
          <button
            class=${isActive ? 'active' : ''}
            @click=${() => handlePreset(preset)}
          >${preset}</button>
        `;
      })}
    </div>
  `;
}
