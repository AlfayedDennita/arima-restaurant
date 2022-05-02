class CreditInfo extends HTMLElement {
  connectedCallback() {
    const brandLogoElement = document.createElement('brand-logo');
    this.appendChild(brandLogoElement);
  }
}

export default CreditInfo;
