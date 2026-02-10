import { css } from 'lit';

export const cardStyles = css`
  :host {
    --apc-spacing: 12px;
    --apc-border-radius: 12px;
    --apc-icon-size: 42px;
    --apc-bg-secondary: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
    --apc-active-color: var(--state-fan-active-color, var(--primary-color));
  }
  ha-card {
    padding: var(--apc-spacing);
    box-sizing: border-box;
    overflow: hidden;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: var(--apc-spacing);
  }
`;
