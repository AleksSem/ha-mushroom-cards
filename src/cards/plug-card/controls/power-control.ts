import { html, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { toggleEntity } from '../../../utils/ha-helper';

export function renderPowerControl(
  hass: HomeAssistant,
  entityId: string,
  active: boolean,
  animated: boolean,
): TemplateResult {
  const handleClick = () => toggleEntity(hass, entityId);
  return html`
    <hac-shape-icon
      icon="mdi:power-plug"
      ?active=${active}
      ?animated=${animated}
      @click=${handleClick}
    ></hac-shape-icon>
  `;
}
