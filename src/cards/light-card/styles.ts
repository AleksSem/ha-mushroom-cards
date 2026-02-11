import { css } from 'lit';
import { timerControlStyles } from '../../shared/styles/timer-styles';
import { notFoundStyles } from '../../shared/styles/not-found-styles';

export const lightCardStyles = [timerControlStyles, notFoundStyles, css`
  /* Header */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Control rows */
  .control-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .control-row ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }
  .control-row .value {
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-text-color);
    min-width: 36px;
    text-align: right;
    flex-shrink: 0;
  }

`];
