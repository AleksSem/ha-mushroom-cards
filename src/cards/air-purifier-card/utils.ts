import { HomeAssistant, HassEntity } from '../../types';
import { discoverEntities, DiscoveredEntities } from '../../utils/entity';
import { AirPurifierCardConfig } from './types';

export interface ResolvedEntities {
  pm25?: string;
  temperature?: string;
  humidity?: string;
  motorSpeed?: string;
  filterLife?: string;
  filterUsedTime?: string;
  favoriteLevel?: string;
  childLock?: string;
  led?: string;
  buzzer?: string;
}

export function resolveEntities(hass: HomeAssistant, config: AirPurifierCardConfig): ResolvedEntities {
  const discovered = discoverEntities(hass, config.entity);
  return {
    pm25: config.pm25_entity || discovered.pm25,
    temperature: config.temperature_entity || discovered.temperature,
    humidity: config.humidity_entity || discovered.humidity,
    motorSpeed: config.motor_speed_entity || discovered.motorSpeed,
    filterLife: config.filter_life_entity || discovered.filterLife,
    filterUsedTime: config.filter_used_time_entity || discovered.filterUsedTime,
    favoriteLevel: config.favorite_level_entity || discovered.favoriteLevel,
    childLock: config.child_lock_entity || discovered.childLock,
    led: config.led_entity || discovered.led,
    buzzer: config.buzzer_entity || discovered.buzzer,
  };
}

export function getPresetModes(entity: HassEntity): string[] {
  return (entity.attributes.preset_modes as string[]) || [];
}

export function getActivePreset(entity: HassEntity): string | undefined {
  return entity.attributes.preset_mode as string | undefined;
}

export function isEntityOn(entity: HassEntity): boolean {
  return entity.state === 'on';
}

export function getEntityState(hass: HomeAssistant, entityId: string | undefined): string | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || entity.state === 'unavailable' || entity.state === 'unknown') return undefined;
  return entity.state;
}

export function getEntityNumericState(hass: HomeAssistant, entityId: string | undefined): number | undefined {
  const state = getEntityState(hass, entityId);
  if (state === undefined) return undefined;
  const num = parseFloat(state);
  return isNaN(num) ? undefined : num;
}

export function getEntityUnit(hass: HomeAssistant, entityId: string | undefined): string {
  if (!entityId) return '';
  const entity = hass.states[entityId];
  return (entity?.attributes.unit_of_measurement as string) || '';
}
