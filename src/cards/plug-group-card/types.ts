import { LovelaceCardConfig } from '../../types';

export interface PlugGroupCardConfig extends LovelaceCardConfig {
  entities: string[];
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_power?: boolean;
  show_daily_consumption?: boolean;
  show_monthly_consumption?: boolean;
  show_yearly_consumption?: boolean;
  show_settings?: boolean;
  show_individual?: boolean;
  icon_animation?: boolean;
  compact_view?: boolean;
  show_timer?: boolean;
  timer_default_action?: string;
}

export interface ResolvedPlugDevice {
  entityId: string;
  name: string;
  power?: string;
  dailyConsumption?: string;
  monthlyConsumption?: string;
  yearlyConsumption?: string;
  childLock?: string;
  powerOnBehavior?: string;
}
