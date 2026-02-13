import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { safeCustomElement } from '../../utils/safe-custom-element';

@safeCustomElement('hac-toggle-button')
export class ToggleButton extends LitElement {
  @property() icon = '';
  @property({ type: Boolean }) active = false;
  @property() label = '';

  private _handleClick() {
    this.dispatchEvent(new CustomEvent('toggle', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <button
        class=${this.active ? 'active' : ''}
        @click=${this._handleClick}
        title=${this.label}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 50%;
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      padding: 0;
      outline: none;
    }
    button ha-icon {
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }
    button.active {
      background: var(--state-fan-active-color, var(--primary-color));
    }
    button.active ha-icon {
      color: var(--text-primary-color, #fff);
    }
    button:hover {
      opacity: 0.8;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-toggle-button': ToggleButton;
  }
}
