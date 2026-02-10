import { HomeAssistant } from '../types';

export function extractPrefix(entityId: string): string {
  // fan.zhimi_vb2_fe9b_air_purifier -> zhimi_vb2_fe9b
  const name = entityId.split('.')[1] || '';
  const parts = name.split('_');
  // Remove last two parts (air_purifier)
  return parts.slice(0, -2).join('_');
}

function findEntity(hass: HomeAssistant, prefix: string, patterns: string[]): string | undefined {
  for (const pattern of patterns) {
    const entityId = pattern.replace('{prefix}', prefix);
    if (hass.states[entityId]) {
      return entityId;
    }
  }
  return undefined;
}

export interface DiscoveredEntities {
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

export function discoverEntities(hass: HomeAssistant, fanEntity: string): DiscoveredEntities {
  const prefix = extractPrefix(fanEntity);
  return {
    pm25: findEntity(hass, prefix, [
      'sensor.{prefix}_pm25_density',
      'sensor.{prefix}_pm25',
      'sensor.{prefix}_pm2_5',
    ]),
    temperature: findEntity(hass, prefix, [
      'sensor.{prefix}_temperature',
      'sensor.{prefix}_environment_temperature',
    ]),
    humidity: findEntity(hass, prefix, [
      'sensor.{prefix}_relative_humidity',
      'sensor.{prefix}_humidity',
    ]),
    motorSpeed: findEntity(hass, prefix, [
      'sensor.{prefix}_motor_speed',
      'sensor.{prefix}_fan_motor_speed',
    ]),
    filterLife: findEntity(hass, prefix, [
      'sensor.{prefix}_filter_life_level',
      'sensor.{prefix}_filter_life',
    ]),
    filterUsedTime: findEntity(hass, prefix, [
      'sensor.{prefix}_filter_used_time',
    ]),
    favoriteLevel: findEntity(hass, prefix, [
      'number.{prefix}_favorite_level',
      'number.{prefix}_favorite_fan_level',
    ]),
    childLock: findEntity(hass, prefix, [
      'switch.{prefix}_physical_control_locked',
      'switch.{prefix}_child_lock',
    ]),
    led: findEntity(hass, prefix, [
      'light.{prefix}_indicator_light',
      'switch.{prefix}_led',
    ]),
    buzzer: findEntity(hass, prefix, [
      'switch.{prefix}_alarm',
      'switch.{prefix}_buzzer',
    ]),
  };
}
