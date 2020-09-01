import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSPageletHeader extends HTMLElement {
    constructor() {
        super(...arguments);
        this.showShadow = false;
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          position: sticky; 
          top: 0px;
          width: 100%;

          margin-top: 8px;
          margin-bottom: 8px;

          z-index: 99;
        }
        :host([shadowed~=true]) {
          box-shadow: 0px 2px 4px 0px rgba(240,240,240,1);
          transition: box-shadow 0.2s ease;
        }
        #root {
          max-width: ${this.getAttribute("content-width")}px;
          margin-left: auto;
          margin-right: auto;

          display: flex;
          flex-direction: row;
          align-items: stretch;

          padding-top: 8px;
          padding-bottom: 8px;
        }
        ::slotted([slot=left-content]) {
          margin-right: 4px;
          margin-top: auto;
          margin-bottom: auto;
        }
        ::slotted([slot=right-content]) {
          margin-left: 4px;
          margin-top: auto;
          margin-bottom: auto;
        }
        #center {
          flex-grow: 1;
        }
      </style>`, Jsx.createElement("div", { id: "root" },
            Jsx.createElement("slot", { name: "left-content" }),
            Jsx.createElement("div", { id: "center" }),
            Jsx.createElement("slot", { name: "right-content" })));
        this.showShadow = window.scrollY <= 0;
        const observer = new IntersectionObserver(function () {
            this.showShadow = !this.showShadow;
            if (this.showShadow) {
                this.shadowRoot.host.setAttribute("shadowed", "true");
            }
            else {
                this.shadowRoot.host.setAttribute("shadowed", "false");
            }
        }.bind(this), {
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1],
        });
        observer.observe(this.shadowRoot.host);
    }
}
window.customElements.define('yds-pagelet-header', YDSPageletHeader);
