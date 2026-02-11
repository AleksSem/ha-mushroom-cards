import { HomeAssistant, HassEntity } from '../../types';
import { extractPrefix, findEntity } from '../../utils/entity';
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
  const prefix = extractPrefix(config.entity);
  return {
    power: config.power_entity || findEntity(hass, prefix, [
      'sensor.{prefix}_power',
      'sensor.{prefix}_electric_power',
    ]),
    dailyConsumption: config.daily_consumption_entity || findEntity(hass, prefix, [
      'sensor.{prefix}_daily_consumption',
      'sensor.{prefix}_daily_energy',
    ]),
    monthlyConsumption: config.monthly_consumption_entity || findEntity(hass, prefix, [
      'sensor.{prefix}_monthly_consumption',
      'sensor.{prefix}_monthly_energy',
    ]),
    yearlyConsumption: config.yearly_consumption_entity || findEntity(hass, prefix, [
      'sensor.{prefix}_yearly_consumption',
      'sensor.{prefix}_yearly_energy',
    ]),
    childLock: config.child_lock_entity || findEntity(hass, prefix, [
      'switch.{prefix}_physical_control_locked',
      'switch.{prefix}_child_lock',
    ]),
    powerOnBehavior: config.power_on_behavior_entity || findEntity(hass, prefix, [
      'select.{prefix}_power_on_behavior',
      'select.{prefix}_power_on_state',
    ]),
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
