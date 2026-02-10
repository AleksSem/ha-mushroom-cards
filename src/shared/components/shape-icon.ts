import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hac-shape-icon')
export class ShapeIcon extends LitElement {
  @property() icon = 'mdi:air-purifier';
  @property({ type: Boolean }) active = false;
  @property({ type: Boolean }) animated = true;

  render() {
    const iconClass = this.active && this.animated ? 'spin' : '';
    return html`
      <div class="shape ${this.active ? 'active' : ''}">
        <ha-icon .icon=${this.icon} class=${iconClass}></ha-icon>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      flex-shrink: 0;
    }
    .shape {
      width: var(--hac-icon-size, 42px);
      height: var(--hac-icon-size, 42px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      cursor: pointer;
      transition: background 0.3s ease;
    }
    .shape.active {
      background: var(--state-fan-active-color, var(--primary-color));
    }
    .shape.active ha-icon {
      color: var(--text-primary-color, #fff);
    }
    ha-icon {
      --mdc-icon-size: 24px;
      color: var(--secondary-text-color);
    }
    .spin {
      animation: spin 1.5s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-shape-icon': ShapeIcon;
  }
}
