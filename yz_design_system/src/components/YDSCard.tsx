import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    const shadow = this.shadowRoot.host.getAttribute("shadow") ?? "rgba(0, 0, 0, 0.15) 0px 2px 8px";
    this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          display: block;
          border-radius: 12px;
          box-shadow: ${shadow};
          padding: 10px;
        }
        .myClass {
          padding: 2px;
        }
      </style>`,
      <slot></slot>
    );
  }
}

window.customElements.define('yds-card', YDSCard);