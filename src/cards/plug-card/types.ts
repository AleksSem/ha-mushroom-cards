import { LovelaceCardConfig } from '../../types';

export interface PlugCardConfig extends LovelaceCardConfig {
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_stats?: boolean;
  show_power_on_behavior?: boolean;
  show_settings?: boolean;
  icon_animation?: boolean;
  compact_view?: boolean;
  show_timer?: boolean;
  timer_default_action?: string;
  // Entity overrides
  power_entity?: string;
  daily_consumption_entity?: string;
  monthly_consumption_entity?: string;
  yearly_consumption_entity?: string;
  child_lock_entity?: string;
  power_on_behavior_entity?: string;
}
