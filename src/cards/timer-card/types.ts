import { LovelaceCardConfig } from '../../types';

export interface TimerCardConfig extends LovelaceCardConfig {
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  default_action?: string;
  custom_service?: string;
  custom_service_data?: Record<string, any>;
  presets?: number[];
  show_presets?: boolean;
}
