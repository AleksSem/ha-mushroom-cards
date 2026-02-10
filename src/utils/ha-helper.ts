import { HomeAssistant } from '../types';

export function callService(
  hass: HomeAssistant,
  domain: string,
  service: string,
  entityId: string,
  data?: Record<string, any>,
): void {
  hass.callService(domain, service, { entity_id: entityId, ...data });
}

export function toggleEntity(hass: HomeAssistant, entityId: string): void {
  const domain = entityId.split('.')[0];
  callService(hass, domain, 'toggle', entityId);
}

export function turnOn(hass: HomeAssistant, entityId: string, data?: Record<string, any>): void {
  const domain = entityId.split('.')[0];
  callService(hass, domain, 'turn_on', entityId, data);
}

export function turnOff(hass: HomeAssistant, entityId: string): void {
  const domain = entityId.split('.')[0];
  callService(hass, domain, 'turn_off', entityId);
}

export function setNumber(hass: HomeAssistant, entityId: string, value: number): void {
  callService(hass, 'number', 'set_value', entityId, { value });
}

export function setPresetMode(hass: HomeAssistant, entityId: string, presetMode: string): void {
  callService(hass, 'fan', 'set_preset_mode', entityId, { preset_mode: presetMode });
}
