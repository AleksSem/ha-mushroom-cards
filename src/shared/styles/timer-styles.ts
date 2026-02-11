import { css } from 'lit';

export const timerControlStyles = css`
  .timer-control {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
    flex-shrink: 0;
  }
  .timer-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    color: var(--secondary-text-color);
    cursor: pointer;
    transition: background 0.2s;
  }
  .timer-btn:hover {
    background: rgba(111, 111, 111, 0.2);
  }
  .timer-btn.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .timer-btn ha-icon {
    --mdc-icon-size: 20px;
  }
`;
