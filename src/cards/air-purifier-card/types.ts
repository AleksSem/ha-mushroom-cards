import { LovelaceCardConfig } from '../../types';

export interface AirPurifierCardConfig extends LovelaceCardConfig {
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_toolbar?: boolean;
  show_stats?: boolean;
  show_settings?: boolean;
  show_filter_info?: boolean;
  compact_view?: boolean;
  icon_animation?: boolean;
  // Entity overrides
  pm25_entity?: string;
  temperature_entity?: string;
  humidity_entity?: string;
  motor_speed_entity?: string;
  filter_life_entity?: string;
  filter_used_time_entity?: string;
  favorite_level_entity?: string;
  child_lock_entity?: string;
  led_entity?: string;
  buzzer_entity?: string;
  // Timer
  show_timer?: boolean;
  timer_default_action?: string;
}
