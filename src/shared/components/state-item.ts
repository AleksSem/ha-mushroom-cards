import { LitElement, html, css } from 'lit';
import { safeCustomElement } from '../../utils/safe-custom-element';

@safeCustomElement('hac-state-item')
export class StateItem extends LitElement {
  render() {
    return html`
      <div class="container">
        <slot name="icon"></slot>
        <slot name="info"></slot>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    .container {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-state-item': StateItem;
  }
}
