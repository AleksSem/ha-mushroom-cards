import { HomeAssistant } from '../../types';
import { getDeviceEntities, findDeviceEntity } from '../../utils/entity';
import { ResolvedPlugDevice } from './types';

export function resolveGroup(hass: HomeAssistant, entities: string[]): ResolvedPlugDevice[] {
  return entities.map(entityId => {
    const deviceEntities = getDeviceEntities(hass, entityId);
    const entity = hass.states[entityId];
    return {
      entityId,
      name: entity?.attributes.friendly_name || entityId,
      power: findDeviceEntity(hass, deviceEntities, 'sensor', { deviceClass: 'power' }),
      dailyConsumption: findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['daily'] }),
      monthlyConsumption: findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['monthly'] }),
      yearlyConsumption: findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['yearly'] }),
      childLock: findDeviceEntity(hass, deviceEntities, 'switch', { keywords: ['child_lock', 'physical_control_locked'] }),
      powerOnBehavior: findDeviceEntity(hass, deviceEntities, 'select', { keywords: ['power_on'] }),
    };
  });
}

export function getEntityNumericState(hass: HomeAssistant, entityId: string | undefined): number | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || entity.state === 'unavailable' || entity.state === 'unknown') return undefined;
  const num = parseFloat(entity.state);
  return isNaN(num) ? undefined : num;
}

export function getEntityUnit(hass: HomeAssistant, entityId: string | undefined): string {
  if (!entityId) return '';
  const entity = hass.states[entityId];
  return (entity?.attributes.unit_of_measurement as string) || '';
}

export function sumDeviceStat(
  hass: HomeAssistant,
  devices: ResolvedPlugDevice[],
  key: 'power' | 'dailyConsumption' | 'monthlyConsumption' | 'yearlyConsumption',
): number | undefined {
  let sum = 0;
  let found = false;
  for (const device of devices) {
    const entityId = device[key];
    if (!entityId) continue;
    const val = getEntityNumericState(hass, entityId);
    if (val !== undefined) {
      sum += val;
      found = true;
    }
  }
  return found ? sum : undefined;
}

export function getFirstUnit(
  hass: HomeAssistant,
  devices: ResolvedPlugDevice[],
  key: 'power' | 'dailyConsumption' | 'monthlyConsumption' | 'yearlyConsumption',
): string {
  for (const device of devices) {
    const entityId = device[key];
    if (entityId) {
      const unit = getEntityUnit(hass, entityId);
      if (unit) return unit;
    }
  }
  return '';
}

export function countOn(hass: HomeAssistant, entities: string[]): number {
  return entities.filter(id => hass.states[id]?.state === 'on').length;
}

export function isAnyOn(hass: HomeAssistant, entities: string[]): boolean {
  return entities.some(id => hass.states[id]?.state === 'on');
}
