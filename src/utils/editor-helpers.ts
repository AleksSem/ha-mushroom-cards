import { HomeAssistant } from '../types';
import { localize } from '../localize';

export function computeLabel(hass: HomeAssistant | undefined, schema: any): string {
  const lang = hass?.language || 'en';
  return localize(`editor.${schema.name}`, lang) || schema.name;
}

export function fireConfigChanged(el: HTMLElement, config: any): void {
  el.dispatchEvent(new CustomEvent('config-changed', {
    detail: { config },
    bubbles: true,
    composed: true,
  }));
}
