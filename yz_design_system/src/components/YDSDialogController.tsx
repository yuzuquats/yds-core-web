import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSDialogController extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        ::slotted([slot=dialog]) {
          display: block;

          position: absolute;
          top: 0px;
          right: 0px;
        }
        #dialog-container {
          position: relative;
        }
        [_hidden~=true] {
          visibility: hidden;
        }
      </style>`,
      <>
        <slot name="toggle"></slot>
        <div id="dialog-container">
          <slot name="dialog" _hidden="true"></slot>
        </div>
      </>
    );
    const slots = this.shadowRoot.querySelectorAll('slot');
    const toggle = Array.from(slots).filter(node => node.name == "toggle")[0];
    const dialog = Array.from(slots).filter(node => node.name == "dialog")[0];

    toggle.onclick = function(e) {
      const isHidden = dialog.getAttribute("_hidden");
      if (isHidden == "true") {
        dialog.setAttribute("_hidden", "false");
      } else {
        dialog.setAttribute("_hidden", "true");
      }
      e.stopPropagation();
    }.bind(this);

    document.addEventListener('click', function(e) {
      let isClickInside = this.shadowRoot.host.contains(e.target);
      if (!isClickInside) {
        dialog.setAttribute("_hidden", "true");
      }
    }.bind(this));

    window.addEventListener('blur', function(e) {
      dialog.setAttribute("_hidden", "true");
    });
  }
}

window.customElements.define('yds-dialog-controller', YDSDialogController);