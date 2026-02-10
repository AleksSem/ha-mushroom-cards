export function getAqiColor(pm25: number): string {
  if (pm25 <= 12) return 'var(--green-color, #4caf50)';
  if (pm25 <= 35) return 'var(--light-green-color, #8bc34a)';
  if (pm25 <= 55) return 'var(--yellow-color, #ffeb3b)';
  if (pm25 <= 150) return 'var(--orange-color, #ff9800)';
  if (pm25 <= 250) return 'var(--deep-orange-color, #ff5722)';
  return 'var(--red-color, #f44336)';
}

export function getAqiLevel(pm25: number): string {
  if (pm25 <= 12) return 'good';
  if (pm25 <= 35) return 'moderate';
  if (pm25 <= 55) return 'unhealthy_sensitive';
  if (pm25 <= 150) return 'unhealthy';
  if (pm25 <= 250) return 'very_unhealthy';
  return 'hazardous';
}

export function getFilterColor(percent: number): string {
  if (percent > 50) return 'var(--green-color, #4caf50)';
  if (percent > 20) return 'var(--orange-color, #ff9800)';
  return 'var(--red-color, #f44336)';
}
