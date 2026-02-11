import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant } from '../../../types';
import { localize } from '../../../localize';
import { PlugGroupCardConfig, ResolvedPlugDevice } from '../types';
import { sumDeviceStat, getFirstUnit } from '../utils';

interface StatItem {
  key: 'power' | 'dailyConsumption' | 'monthlyConsumption' | 'yearlyConsumption';
  labelKey: string;
  decimals?: number;
  configKey: keyof PlugGroupCardConfig;
}

export function renderAggregatedStats(
  hass: HomeAssistant,
  devices: ResolvedPlugDevice[],
  lang: string,
  config: PlugGroupCardConfig,
): TemplateResult | typeof nothing {
  const stats: StatItem[] = [
    { key: 'power', labelKey: 'stats.power', configKey: 'show_power' },
    { key: 'dailyConsumption', labelKey: 'stats.daily', decimals: 2, configKey: 'show_daily_consumption' },
    { key: 'monthlyConsumption', labelKey: 'stats.monthly', decimals: 2, configKey: 'show_monthly_consumption' },
    { key: 'yearlyConsumption', labelKey: 'stats.yearly', decimals: 2, configKey: 'show_yearly_consumption' },
  ];

  const available = stats.filter(s => {
    if (config[s.configKey] === false) return false;
    return sumDeviceStat(hass, devices, s.key) !== undefined;
  });

  if (available.length === 0) return nothing;

  return html`
    <div class="stats-grid">
      ${available.map(stat => {
        const value = sumDeviceStat(hass, devices, stat.key);
        const unit = getFirstUnit(hass, devices, stat.key);
        const formatted = value !== undefined
          ? (stat.decimals !== undefined ? value.toFixed(stat.decimals) : Math.round(value).toString())
          : '\u2014';
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
