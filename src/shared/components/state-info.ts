import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { safeCustomElement } from '../../utils/safe-custom-element';

@safeCustomElement('hac-state-info')
export class StateInfo extends LitElement {
  @property() primary = '';
  @property() secondary = '';

  render() {
    return html`
      ${this.primary ? html`<span class="primary">${this.primary}</span>` : nothing}
      ${this.secondary ? html`<span class="secondary">${this.secondary}</span>` : nothing}
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
      flex: 1;
    }
    .primary {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .secondary {
      font-size: 12px;
      line-height: 16px;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-state-info': StateInfo;
  }
}
