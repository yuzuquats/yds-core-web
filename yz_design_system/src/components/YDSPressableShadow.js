import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSPressableShadow extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        const shadow = (_a = this.shadowRoot.host.getAttribute("shadow")) !== null && _a !== void 0 ? _a : "0px 2px 15px 0px rgba(0,0,0,0.15)";
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
      </style>`, Jsx.createElement("slot", null));
    }
}
window.customElements.define('yds-pressable-shadow', YDSPressableShadow);
