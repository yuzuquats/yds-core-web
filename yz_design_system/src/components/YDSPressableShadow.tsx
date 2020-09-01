import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSPressableShadow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    const shadow = this.shadowRoot.host.getAttribute("shadow") ?? "0px 2px 15px 0px rgba(0,0,0,0.15)";
    const border = "1px solid #DDDDDD";
    this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          display: block;
          border-radius: 12px;
          border: ${border};
          padding: 10px;
          transition: box-shadow 0.1s ease;
        }
        :host(:hover) {
          box-shadow: ${shadow};
        }
      </style>`,
      <slot></slot>
    );
  }
}

window.customElements.define('yds-pressable-shadow', YDSPressableShadow);