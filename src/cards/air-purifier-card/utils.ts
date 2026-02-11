import { HomeAssistant, HassEntity } from '../../types';
import { getDeviceEntities, findDeviceEntity } from '../../utils/entity';
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
  const deviceEntities = getDeviceEntities(hass, config.entity);
  return {
    pm25: config.pm25_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { deviceClass: 'pm25' }),
    temperature: config.temperature_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { deviceClass: 'temperature' }),
    humidity: config.humidity_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { deviceClass: 'humidity' }),
    motorSpeed: config.motor_speed_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['motor_speed'] }),
    filterLife: config.filter_life_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['filter_life_level', 'filter_life'] }),
    filterUsedTime: config.filter_used_time_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['filter_used_time'] }),
    favoriteLevel: config.favorite_level_entity || findDeviceEntity(hass, deviceEntities, 'number', { keywords: ['favorite'] }),
    childLock: config.child_lock_entity || findDeviceEntity(hass, deviceEntities, 'switch', { keywords: ['child_lock', 'physical_control_locked'] }),
    led: config.led_entity
      || findDeviceEntity(hass, deviceEntities, 'light', { keywords: ['indicator'] })
      || findDeviceEntity(hass, deviceEntities, 'switch', { keywords: ['led'] }),
    buzzer: config.buzzer_entity || findDeviceEntity(hass, deviceEntities, 'switch', { keywords: ['alarm', 'buzzer'] }),
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
