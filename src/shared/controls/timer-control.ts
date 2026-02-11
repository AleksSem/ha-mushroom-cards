import { html, nothing, TemplateResult } from 'lit';
import { HomeAssistant, Schedule } from '../../types';

import '../components/timer-dialog';

export function renderTimerButton(
  activeSchedules: Schedule[],
  onOpenDialog: () => void,
): TemplateResult {
  const hasActive = activeSchedules.length > 0;
  const firstSchedule = activeSchedules[0];

  return html`
    <div class="timer-control">
      <button class="timer-btn ${hasActive ? 'active' : ''}" @click=${onOpenDialog}>
        <ha-icon icon="mdi:timer-outline"></ha-icon>
      </button>
      ${hasActive && firstSchedule
        ? html`
            <hac-timer-badge
              .schedule=${firstSchedule}
              compact
            ></hac-timer-badge>
          `
        : nothing}
    </div>
  `;
}

export function renderTimerDialog(
  hass: HomeAssistant,
  entityId: string | string[],
  entityName: string,
  open: boolean,
  defaultAction: string,
  onClose: () => void,
): TemplateResult {
  return html`
    <hac-timer-dialog
      .hass=${hass}
      .entityId=${entityId}
      .entityName=${entityName}
      .open=${open}
      .defaultAction=${defaultAction}
      @dialog-closed=${onClose}
    ></hac-timer-dialog>
  `;
}
