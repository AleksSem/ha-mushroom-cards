import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { getAqiColor } from '../../../utils/colors';
import { getEntityNumericState, getEntityUnit, ResolvedEntities } from '../utils';

interface StatItem {
  key: string;
  entityId: string | undefined;
  labelKey: string;
  icon: string;
}

export function renderStatsRow(
  hass: HomeAssistant,
  entities: ResolvedEntities,
  lang: string,
): TemplateResult | typeof nothing {
  const stats: StatItem[] = [
    { key: 'pm25', entityId: entities.pm25, labelKey: 'stats.pm25', icon: 'mdi:blur' },
    { key: 'temperature', entityId: entities.temperature, labelKey: 'stats.temperature', icon: 'mdi:thermometer' },
    { key: 'humidity', entityId: entities.humidity, labelKey: 'stats.humidity', icon: 'mdi:water-percent' },
    { key: 'motorSpeed', entityId: entities.motorSpeed, labelKey: 'stats.motor_speed', icon: 'mdi:fan' },
  ];

  const available = stats.filter(s => {
    if (!s.entityId) return false;
    const val = getEntityNumericState(hass, s.entityId);
    return val !== undefined;
  });

  if (available.length === 0) return nothing;

  return html`
    <div class="stats-grid">
      ${available.map(stat => {
        const value = getEntityNumericState(hass, stat.entityId);
        const unit = getEntityUnit(hass, stat.entityId);
        const isPm25 = stat.key === 'pm25' && value !== undefined;
        const bgStyle = isPm25 ? `background: ${getAqiColor(value!)}; color: #fff;` : '';
        return html`
          <div class="stat-item" style=${bgStyle}>
            <span class="stat-value">
              ${value !== undefined ? Math.round(value) : '—'}
              ${unit ? html`<span class="stat-unit" style=${isPm25 ? 'color: inherit;' : ''}>${unit}</span>` : ''}
            </span>
            <span class="stat-label" style=${isPm25 ? 'color: inherit;' : ''}>${localize(stat.labelKey, lang)}</span>
          </div>
        `;
      })}
    </div>
  `;
}
