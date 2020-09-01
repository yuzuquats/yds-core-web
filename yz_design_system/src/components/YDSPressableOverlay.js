import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSPressableOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b;
        const overlayColor = (_a = this.shadowRoot.host.getAttribute("overlay-color")) !== null && _a !== void 0 ? _a : "rgba(0,0,0,0.03)";
        const overlayBorderRadius = (_b = this.shadowRoot.host.getAttribute("overlay-border-radius")) !== null && _b !== void 0 ? _b : "12px";
        this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          display: block;
          padding: 10px;
          position: relative;

          cursor: pointer;
        }
        #overlay {
          opacity: 0;

          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          
          border-radius: ${overlayBorderRadius};
          background-color: ${overlayColor};
        }
        #overlay:hover {
          opacity: 1;
          transition: box-shadow 0.2s ease;
        }
      </style>`, Jsx.createElement(Jsx.FRAGMENT, null,
            Jsx.createElement("slot", null),
            Jsx.createElement("div", { id: "overlay" })));
    }
}
window.customElements.define('yds-pressable-overlay', YDSPressableOverlay);
