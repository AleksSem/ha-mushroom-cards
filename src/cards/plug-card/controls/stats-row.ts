import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { getEntityNumericState, getEntityUnit, ResolvedEntities } from '../utils';
import { PlugCardConfig } from '../types';

interface StatItem {
  entityId: string | undefined;
  labelKey: string;
  decimals?: number;
  configKey: keyof PlugCardConfig;
}

export function renderStatsRow(
  hass: HomeAssistant,
  entities: ResolvedEntities,
  lang: string,
  config: PlugCardConfig,
): TemplateResult | typeof nothing {
  const stats: StatItem[] = [
    { entityId: entities.power, labelKey: 'stats.power', configKey: 'show_power' },
    { entityId: entities.dailyConsumption, labelKey: 'stats.daily', decimals: 2, configKey: 'show_daily_consumption' },
    { entityId: entities.monthlyConsumption, labelKey: 'stats.monthly', decimals: 2, configKey: 'show_monthly_consumption' },
    { entityId: entities.yearlyConsumption, labelKey: 'stats.yearly', decimals: 2, configKey: 'show_yearly_consumption' },
  ];

  const available = stats.filter(s => {
    if (config[s.configKey] === false) return false;
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
        const formatted = value !== undefined
          ? (stat.decimals !== undefined ? value.toFixed(stat.decimals) : Math.round(value).toString())
          : '—';
        return html`
          <div class="stat-item">
            <span class="stat-value">
              ${formatted}
              ${unit ? html`<span class="stat-unit">${unit}</span>` : ''}
            </span>
            <span class="stat-label">${localize(stat.labelKey, lang)}</span>
          </div>
        `;
      })}
    </div>
  `;
}
