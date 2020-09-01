import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSPressableOverlay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    const overlayColor = this.shadowRoot.host.getAttribute("overlay-color") ?? "rgba(0,0,0,0.03)";
    const overlayBorderRadius = this.shadowRoot.host.getAttribute("overlay-border-radius") ?? "12px";
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
      </style>`,
      <>
        <slot></slot>
        <div id="overlay"></div>
      </>
    );
  }
}

window.customElements.define('yds-pressable-overlay', YDSPressableOverlay);