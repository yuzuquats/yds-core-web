import Jsx from '../../yds-web-jsx/src/YDSJsx.js';
export class YDSHorizontalCardLayout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a;
        const shadow = (_a = this.shadowRoot.host.getAttribute("shadow")) !== null && _a !== void 0 ? _a : "rgba(0, 0, 0, 0.15) 0px 2px 8px";
        const title = this.getAttribute("title");
        const subtitle = this.getAttribute("subtitle");
        const author = this.getAttribute("author");
        const authorSubtitle = this.getAttribute("authorSubtitle");
        this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        p {
          margin: 0;
        }
      </style>`, Jsx.createElement("yds-pressable-shadow", { style: "\r\n          display: flex;\r\n          flex-direction: row;\r\n          margin-bottom: 20px;\r\n          padding: 10px;\r\n          border-radius: 20px;\r\n          height: 300px;\r\n        " },
            Jsx.createElement("div", { style: "\r\n          background-image: url('../../../examples/img/photo-1598544769561-b79f32b3b878.jpg');\r\n          background-size: cover;\r\n          background-position: center center;\r\n          width: calc(50% - 5px);\r\n          height: 100%;\r\n          border-radius: 12px;\r\n          margin-right: 10px;\r\n          " }),
            Jsx.createElement("div", { style: "\r\n          display: flex;\r\n          flex-direction: column;\r\n          width: calc(50% - 5px);\r\n          border-radius: 12px;\r\n          margin-left: 10px;\r\n          margin-right: 20px;\r\n          " },
                Jsx.createElement("h2", { style: "font-weight: 600; font-size: 22px; color: #444444; margin-top: 20px; margin-bottom: 20px; margin-left: 10px; line-height: 1.3" }, title),
                Jsx.createElement("p", { style: "font-weight: 400; font-size: 16px; color: #8899AA; margin-left: 10px; line-height: 1.6; flex-grow: 1;" }, subtitle),
                Jsx.createElement("yds-pressable-overlay", { style: "display: flex;" },
                    Jsx.createElement("div", { style: "\r\n              height: 40px; \r\n              width: 40px; \r\n              border-radius: 20px; \r\n              background-color: #DDDDDD; \r\n              margin-right: 10px;" }),
                    Jsx.createElement("div", null,
                        Jsx.createElement("p", { style: "font-size: 14px; font-weight: 600;" }, author),
                        Jsx.createElement("p", { style: "font-size: 14px;" }, authorSubtitle))))));
    }
}
window.customElements.define('yds-horizontal-card-layout', YDSHorizontalCardLayout);
