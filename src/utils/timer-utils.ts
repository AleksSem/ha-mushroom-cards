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
  detail: { action: string; duration?: number; time?: string; days_of_week?: number[] },
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
  if (detail.days_of_week?.length) {
    params.days_of_week = detail.days_of_week;
  }
  return params;
}

export function buildGroupScheduleParams(
  entityIds: string[],
  detail: { action: string; duration?: number; time?: string; days_of_week?: number[] },
): CreateScheduleParams {
  const domain = entityIds[0].split('.')[0];
  const params: CreateScheduleParams = {
    target_entity: entityIds[0],
    action: 'custom',
    service: `${domain}.${detail.action}`,
    service_data: { entity_id: entityIds },
  };
  if (detail.duration) {
    params.duration = detail.duration;
  } else if (detail.time) {
    params.time = detail.time;
  }
  if (detail.days_of_week?.length) {
    params.days_of_week = detail.days_of_week;
  }
  return params;
}
