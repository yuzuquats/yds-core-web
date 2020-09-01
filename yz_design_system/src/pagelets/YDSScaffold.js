import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSScaffold extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          min-height: 100%;
          min-width: 100%;

          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        #content {
          flex-grow: 1;
        }
      </style>`, Jsx.createElement(Jsx.FRAGMENT, null,
            Jsx.createElement("slot", { name: "header" }),
            Jsx.createElement("div", { id: "content" },
                Jsx.createElement("slot", null)),
            Jsx.createElement("slot", { name: "footer" })));
    }
}
window.customElements.define('yds-scaffold', YDSScaffold);
