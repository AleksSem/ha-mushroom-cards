import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hac-progress-bar')
export class ProgressBar extends LitElement {
  @property({ type: Number }) value = 0;
  @property() color = 'var(--primary-color)';

  render() {
    const pct = Math.min(100, Math.max(0, this.value));
    return html`
      <div class="bar">
        <div class="fill" style="width: ${pct}%; background: ${this.color}"></div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    .bar {
      height: 6px;
      border-radius: 3px;
      background: var(--secondary-background-color, rgba(111, 111, 111, 0.12));
      overflow: hidden;
    }
    .fill {
      height: 100%;
      border-radius: 3px;
      transition: width 0.3s ease, background 0.3s ease;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-progress-bar': ProgressBar;
  }
}
