import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSPressable extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          cursor: pointer;
        }
      </style>`,
      <slot></slot>
    );
  }
}

window.customElements.define('yds-pressable', YDSPressable);