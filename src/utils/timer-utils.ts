import { localize } from '../localize';
import { CreateScheduleParams } from './scheduler-api';

export function getActionLabel(action: string, lang: string): string {
  switch (action) {
    case 'turn_on':
      return localize('timer.turn_on', lang);
    case 'turn_off':
      return localize('timer.turn_off', lang);
    case 'toggle':
      return localize('timer.toggle', lang);
    default:
      return action;
  }
}

export function buildScheduleParams(
  entityId: string,
  detail: { action: string; duration?: number; time?: string },
): CreateScheduleParams {
  const params: CreateScheduleParams = {
    target_entity: entityId,
    action: detail.action,
  };
  if (detail.duration) {
    params.duration = detail.duration;
  } else if (detail.time) {
    params.time = detail.time;
  }
  return params;
}
