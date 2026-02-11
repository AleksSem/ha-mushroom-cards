import { HomeAssistant } from '../types';

export function getDeviceEntities(hass: HomeAssistant, entityId: string): string[] {
  if (!hass.entities) return [];
  const entry = hass.entities[entityId];
  if (!entry?.device_id) return [];
  const deviceId = entry.device_id;
  return Object.values(hass.entities)
    .filter((e) => e.device_id === deviceId)
    .map((e) => e.entity_id);
}

export interface FindEntityOptions {
  deviceClass?: string;
  keywords?: string[];
}

export function findDeviceEntity(
  hass: HomeAssistant,
  deviceEntities: string[],
  domain: string,
  options?: FindEntityOptions,
): string | undefined {
  const domainPrefix = domain.endsWith('.') ? domain : domain + '.';
  const candidates = deviceEntities.filter(
    (id) => id.startsWith(domainPrefix) && hass.states[id],
  );

  if (candidates.length === 0) return undefined;
  if (!options) return candidates[0];

  const { deviceClass, keywords } = options;

  const matchesClass = (id: string): boolean => {
    if (!deviceClass) return false;
    return hass.states[id]?.attributes.device_class === deviceClass;
  };

  const matchesKeywords = (id: string): boolean => {
    if (!keywords || keywords.length === 0) return false;
    return keywords.some((kw) => id.includes(kw));
  };

  // Priority: deviceClass + keywords > deviceClass only > keywords only > first candidate
  const classAndKeyword = candidates.find((id) => matchesClass(id) && matchesKeywords(id));
  if (classAndKeyword) return classAndKeyword;

  const classOnly = candidates.find((id) => matchesClass(id));
  if (classOnly) return classOnly;

  const keywordsOnly = candidates.find((id) => matchesKeywords(id));
  if (keywordsOnly) return keywordsOnly;

  return undefined;
}
