import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { HomeAssistant } from '../types';

export class BaseElement extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
}
