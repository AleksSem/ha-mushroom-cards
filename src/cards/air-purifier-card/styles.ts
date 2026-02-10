import { css } from 'lit';

export const airPurifierCardStyles = css`
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

  /* Preset toolbar */
  .toolbar {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .toolbar button {
    flex: 1;
    min-width: 0;
    padding: 8px 6px;
    border: none;
    border-radius: 12px;
    background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    color: var(--primary-text-color);
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    outline: none;
  }
  .toolbar button.active {
    background: var(--state-fan-active-color, var(--primary-color));
    color: var(--text-primary-color, #fff);
  }
  .toolbar button:hover {
    opacity: 0.8;
  }

  /* Favorite slider */
  .favorite-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .favorite-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    min-width: 20px;
    text-align: right;
  }

  /* Filter section */
  .filter-section {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .filter-header .value {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Settings row */
  .settings-row {
    display: flex;
    gap: 8px;
    justify-content: center;
  }

  /* Not found */
  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`;
