
import Jsx from '../../yds-web-jsx/src/YDSJsx.js';

export class YDSHorizontalCardLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {
    const shadow = this.shadowRoot.host.getAttribute("shadow") ?? "rgba(0, 0, 0, 0.15) 0px 2px 8px";
    const title = this.getAttribute("title");
    const subtitle = this.getAttribute("subtitle");
    const author = this.getAttribute("author");
    const authorSubtitle = this.getAttribute("authorSubtitle");

    this.shadowRoot.innerHTML = Jsx.html(`
      <style>
        p {
          margin: 0;
        }
      </style>`,
      <yds-pressable-shadow style="
          display: flex;
          flex-direction: row;
          margin-bottom: 20px;
          padding: 10px;
          border-radius: 20px;
          height: 300px;
        ">
        {/* TODO: parameterize the image */}
        <div style="
          background-image: url('../../../examples/img/photo-1598544769561-b79f32b3b878.jpg');
          background-size: cover;
          background-position: center center;
          width: calc(50% - 5px);
          height: 100%;
          border-radius: 12px;
          margin-right: 10px;
          ">
        </div>
        
        <div style="
          display: flex;
          flex-direction: column;
          width: calc(50% - 5px);
          border-radius: 12px;
          margin-left: 10px;
          margin-right: 20px;
          ">
          <h2 style="font-weight: 600; font-size: 22px; color: #444444; margin-top: 20px; margin-bottom: 20px; margin-left: 10px; line-height: 1.3">{title}</h2>
          <p style="font-weight: 400; font-size: 16px; color: #8899AA; margin-left: 10px; line-height: 1.6; flex-grow: 1;">{subtitle}</p>
          
          {/* TODO: Pull this out into a list cell */}
          <yds-pressable-overlay style="display: flex;">
            <div style="
              height: 40px; 
              width: 40px; 
              border-radius: 20px; 
              background-color: #DDDDDD; 
              margin-right: 10px;">
            </div>
            <div>
              <p style="font-size: 14px; font-weight: 600;">{author}</p>
              <p style="font-size: 14px;">{authorSubtitle}</p>
            </div>
          </yds-pressable-overlay>
        </div>
      </yds-pressable-shadow>
    );
  }
}

window.customElements.define('yds-horizontal-card-layout', YDSHorizontalCardLayout);


