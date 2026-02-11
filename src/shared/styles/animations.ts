import { css } from 'lit';

export const animationStyles = css`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  .spin {
    animation: spin 1.5s linear infinite;
  }
  .pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`;
