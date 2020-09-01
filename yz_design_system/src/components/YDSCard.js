import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        const shadow = (_a = this.shadowRoot.host.getAttribute("shadow")) !== null && _a !== void 0 ? _a : "rgba(0, 0, 0, 0.15) 0px 2px 8px";
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
      </style>`, Jsx.createElement("slot", null));
    }
}
window.customElements.define('yds-card', YDSCard);
