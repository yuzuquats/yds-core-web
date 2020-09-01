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
      </style>`,
      <>
        <slot name="header"></slot>
        <div id="content">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </>
    );
  }
}

window.customElements.define('yds-scaffold', YDSScaffold);