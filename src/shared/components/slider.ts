import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hac-slider')
export class HacSlider extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) step = 1;
  @property({ type: Boolean }) disabled = false;

  private _onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    this.dispatchEvent(new CustomEvent('value-changed', {
      detail: { value },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const pct = ((this.value - this.min) / (this.max - this.min)) * 100;
    return html`
      <div class="slider-container">
        <input
          type="range"
          .value=${String(this.value)}
          .min=${String(this.min)}
          .max=${String(this.max)}
          .step=${String(this.step)}
          ?disabled=${this.disabled}
          @change=${this._onChange}
          style="--slider-pct: ${pct}%"
        />
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      flex: 1;
    }
    .slider-container {
      display: flex;
      align-items: center;
    }
    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 3px;
      background: linear-gradient(
        to right,
        var(--state-fan-active-color, var(--primary-color)) 0%,
        var(--state-fan-active-color, var(--primary-color)) var(--slider-pct, 0%),
        var(--secondary-background-color, rgba(111, 111, 111, 0.12)) var(--slider-pct, 0%),
        var(--secondary-background-color, rgba(111, 111, 111, 0.12)) 100%
      );
      outline: none;
      cursor: pointer;
    }
    input[type="range"]:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--state-fan-active-color, var(--primary-color));
      border: 2px solid var(--card-background-color, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--state-fan-active-color, var(--primary-color));
      border: 2px solid var(--card-background-color, #fff);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hac-slider': HacSlider;
  }
}
