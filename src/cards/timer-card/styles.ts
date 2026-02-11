import { css } from 'lit';
import { notFoundStyles } from '../../shared/styles/not-found-styles';

export const timerCardStyles = [notFoundStyles, css`
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .power-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--apc-icon-size, 42px);
    height: var(--apc-icon-size, 42px);
    border-radius: 50%;
    border: none;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    color: var(--secondary-text-color);
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.3s, color 0.3s;
  }
  .power-btn.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .power-btn ha-icon {
    --mdc-icon-size: 24px;
  }

  .timer-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .active-timers {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .active-timers-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .timer-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
  }
  .timer-item .action-text {
    flex: 1;
    font-size: 13px;
    color: var(--primary-text-color);
  }
  .timer-item .cancel-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    background: none;
    color: var(--secondary-text-color);
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.2s;
  }
  .timer-item .cancel-btn:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .timer-item .cancel-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  .no-active {
    font-size: 13px;
    color: var(--secondary-text-color);
    text-align: center;
    padding: 8px;
  }

  .recurring-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-color);
    flex-shrink: 0;
  }
  .recurring-info {
    font-size: 13px;
    color: var(--primary-text-color);
    white-space: nowrap;
  }

`];
