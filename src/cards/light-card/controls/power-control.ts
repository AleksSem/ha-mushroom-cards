import { html, TemplateResult } from 'lit';
import { HomeAssistant, HassEntity } from '../../../types';
import { toggleEntity } from '../../../utils/ha-helper';
import { getLightColorStyle } from '../utils';

export function renderPowerControl(
  hass: HomeAssistant,
  entityId: string,
  entity: HassEntity,
  active: boolean,
  animated: boolean,
  useLightColor: boolean,
): TemplateResult {
  const handleClick = () => toggleEntity(hass, entityId);

  const colorStyle = useLightColor && active
    ? getLightColorStyle(entity)
    : undefined;

  const style = colorStyle ? `--hac-shape-active-bg: ${colorStyle}` : '';

  return html`
    <hac-shape-icon
      icon="mdi:lightbulb"
      ?active=${active}
      ?animated=${animated}
      animation="pulse"
      style=${style}
      @click=${handleClick}
    ></hac-shape-icon>
  `;
}
