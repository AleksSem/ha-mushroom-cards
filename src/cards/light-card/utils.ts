import { HassEntity } from '../../types';

export type ColorMode = 'onoff' | 'brightness' | 'color_temp' | 'hs' | 'xy' | 'rgb' | 'rgbw' | 'rgbww';

export function getSupportedColorModes(entity: HassEntity): ColorMode[] {
  return (entity.attributes.supported_color_modes as ColorMode[]) || [];
}

export function supportsBrightness(entity: HassEntity): boolean {
  const modes = getSupportedColorModes(entity);
  return modes.length > 0 && !modes.every(m => m === 'onoff');
}

export function supportsColorTemp(entity: HassEntity): boolean {
  return getSupportedColorModes(entity).includes('color_temp');
}

export function supportsColor(entity: HassEntity): boolean {
  const colorModes: ColorMode[] = ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'];
  return getSupportedColorModes(entity).some(m => colorModes.includes(m));
}

export function isLightOn(entity: HassEntity): boolean {
  return entity.state === 'on';
}

export function getBrightnessPercent(entity: HassEntity): number {
  const brightness = entity.attributes.brightness;
  if (brightness == null) return isLightOn(entity) ? 100 : 0;
  return Math.max(1, Math.round((brightness / 255) * 100));
}

export function getColorTempKelvin(entity: HassEntity): number {
  return entity.attributes.color_temp_kelvin ?? 4000;
}

export function getColorTempRange(entity: HassEntity): { min: number; max: number } {
  return {
    min: entity.attributes.min_color_temp_kelvin ?? 2000,
    max: entity.attributes.max_color_temp_kelvin ?? 6500,
  };
}

export function getRgbColor(entity: HassEntity): [number, number, number] | undefined {
  return entity.attributes.rgb_color;
}

export function getHsColor(entity: HassEntity): [number, number] | undefined {
  return entity.attributes.hs_color;
}

/** HSV to RGB conversion. h: 0-360, s: 0-100, v: 0-100 → [r, g, b] 0-255 */
export function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  const sn = s / 100;
  const vn = v / 100;
  const c = vn * sn;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = vn - c;

  let r1: number, g1: number, b1: number;
  if (h < 60) { r1 = c; g1 = x; b1 = 0; }
  else if (h < 120) { r1 = x; g1 = c; b1 = 0; }
  else if (h < 180) { r1 = 0; g1 = c; b1 = x; }
  else if (h < 240) { r1 = 0; g1 = x; b1 = c; }
  else if (h < 300) { r1 = x; g1 = 0; b1 = c; }
  else { r1 = c; g1 = 0; b1 = x; }

  return [
    Math.round((r1 + m) * 255),
    Math.round((g1 + m) * 255),
    Math.round((b1 + m) * 255),
  ];
}

/** Kelvin to RGB (Tanner Helland algorithm). kelvin: 1000-40000 → [r, g, b] 0-255 */
export function kelvinToRgb(kelvin: number): [number, number, number] {
  const temp = kelvin / 100;
  let r: number, g: number, b: number;

  // Red
  if (temp <= 66) {
    r = 255;
  } else {
    r = 329.698727446 * Math.pow(temp - 60, -0.1332047592);
  }

  // Green
  if (temp <= 66) {
    g = 99.4708025861 * Math.log(temp) - 161.1195681661;
  } else {
    g = 288.1221695283 * Math.pow(temp - 60, -0.0755148492);
  }

  // Blue
  if (temp >= 66) {
    b = 255;
  } else if (temp <= 19) {
    b = 0;
  } else {
    b = 138.5177312231 * Math.log(temp - 10) - 305.0447927307;
  }

  return [
    Math.round(Math.min(255, Math.max(0, r))),
    Math.round(Math.min(255, Math.max(0, g))),
    Math.round(Math.min(255, Math.max(0, b))),
  ];
}

/** Get CSS color string for light icon tinting based on current light color */
export function getLightColorStyle(entity: HassEntity): string | undefined {
  if (!isLightOn(entity)) return undefined;

  const rgb = getRgbColor(entity);
  if (rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }

  const kelvin = entity.attributes.color_temp_kelvin;
  if (kelvin) {
    const [r, g, b] = kelvinToRgb(kelvin);
    return `rgb(${r}, ${g}, ${b})`;
  }

  return undefined;
}
