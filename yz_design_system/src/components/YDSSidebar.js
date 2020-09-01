import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSSidebar extends HTMLElement {
    connectedCallback() {
        var _a;
        this.attachShadow({ mode: 'open' });
        const shadow = (_a = this.shadowRoot.host.getAttribute("shadow")) !== null && _a !== void 0 ? _a : "rgba(0, 0, 0, 0.15) 0px 2px 8px";
        this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          display: block;
          border-radius: 12px;
          box-shadow: ${shadow};
          padding: 10px;
        }
      </style>`, Jsx.createElement(Jsx.FRAGMENT, null,
            Jsx.createElement("div", { style: {
                    'background-color': 'red',
                }, hello: "abc" }, "Hello World"),
            Jsx.createElement("div", null, "Hello World"),
            Jsx.createElement("div", null, "Hello World"),
            Jsx.createElement("div", null, "Hello World")));
    }
}
window.customElements.define('yds-sidebar', YDSSidebar);
