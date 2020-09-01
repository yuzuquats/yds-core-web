import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSSidebar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    const shadow = this.shadowRoot.host.getAttribute("shadow") ?? "rgba(0, 0, 0, 0.15) 0px 2px 8px";
    this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        :host {
          display: block;
          border-radius: 12px;
          box-shadow: ${shadow};
          padding: 10px;
        }
      </style>`,
      <>
        <div style={{
          'background-color': 'red',
        }} hello="abc">
          Hello World
        </div>
        <div>Hello World</div>
        <div>Hello World</div>
        <div>Hello World</div>
      </>
    );
  }
}

window.customElements.define('yds-sidebar', YDSSidebar);