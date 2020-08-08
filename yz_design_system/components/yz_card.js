class YZCard extends HTMLElement {
  connectedCallback() {
    console.log("YZCard - connectedCallback");
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
  }
}

window.customElements.define('yz-card', YZCard);