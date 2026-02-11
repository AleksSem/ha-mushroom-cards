import { css } from 'lit';
import { timerControlStyles } from '../../shared/styles/timer-styles';
import { notFoundStyles } from '../../shared/styles/not-found-styles';

export const plugGroupCardStyles = [timerControlStyles, notFoundStyles, css`
  /* Header */
  .header {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Stats grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 8px;
  }
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 4px;
    border-radius: 12px;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
  }
  .stat-value {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
    line-height: 1.2;
  }
  .stat-unit {
    font-size: 10px;
    font-weight: 400;
    color: var(--secondary-text-color);
  }
  .stat-label {
    font-size: 10px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Plug list */
  .plug-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .plug-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .plug-row:hover {
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
  }
  .plug-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--disabled-text-color, #999);
    flex-shrink: 0;
  }
  .plug-dot.on {
    background: var(--apc-active-color);
  }
  .plug-name {
    flex: 1;
    font-size: 14px;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .plug-power {
    font-size: 13px;
    color: var(--secondary-text-color);
    flex-shrink: 0;
  }

  /* Settings row */
  .settings-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
`];
