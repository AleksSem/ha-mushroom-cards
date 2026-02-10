import { css } from 'lit';

export const lightCardStyles = css`
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

  /* Not found */
  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`;
