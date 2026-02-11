import { HomeAssistant, HassEntity } from '../../types';
import { getDeviceEntities, findDeviceEntity } from '../../utils/entity';
import { PlugCardConfig } from './types';

export interface ResolvedEntities {
  power?: string;
  dailyConsumption?: string;
  monthlyConsumption?: string;
  yearlyConsumption?: string;
  childLock?: string;
  powerOnBehavior?: string;
}

export function resolveEntities(hass: HomeAssistant, config: PlugCardConfig): ResolvedEntities {
  const deviceEntities = getDeviceEntities(hass, config.entity);
  return {
    power: config.power_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { deviceClass: 'power' }),
    dailyConsumption: config.daily_consumption_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['daily'] }),
    monthlyConsumption: config.monthly_consumption_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['monthly'] }),
    yearlyConsumption: config.yearly_consumption_entity || findDeviceEntity(hass, deviceEntities, 'sensor', { keywords: ['yearly'] }),
    childLock: config.child_lock_entity || findDeviceEntity(hass, deviceEntities, 'switch', { keywords: ['child_lock', 'physical_control_locked'] }),
    powerOnBehavior: config.power_on_behavior_entity || findDeviceEntity(hass, deviceEntities, 'select', { keywords: ['power_on'] }),
  };
}

export function isEntityOn(entity: HassEntity): boolean {
  return entity.state === 'on';
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

export function getPowerOnBehaviorOptions(hass: HomeAssistant, entityId: string | undefined): string[] {
  if (!entityId) return [];
  const entity = hass.states[entityId];
  return (entity?.attributes.options as string[]) || [];
}

export function getActivePowerOnBehavior(hass: HomeAssistant, entityId: string | undefined): string | undefined {
  if (!entityId) return undefined;
  const entity = hass.states[entityId];
  if (!entity || entity.state === 'unavailable' || entity.state === 'unknown') return undefined;
  return entity.state;
}
