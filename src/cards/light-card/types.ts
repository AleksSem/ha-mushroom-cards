import { LovelaceCardConfig } from '../../types';

export interface LightCardConfig extends LovelaceCardConfig {
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_brightness_control?: boolean;
  show_color_temp_control?: boolean;
  show_color_control?: boolean;
  use_light_color?: boolean;
  icon_animation?: boolean;
  compact_view?: boolean;
  hide_controls_when_off?: boolean;
}
