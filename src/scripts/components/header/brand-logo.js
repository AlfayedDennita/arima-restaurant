class BrandLogo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/#/home" class="button" title="Arima" aria-label="Logo">
        <i class="fas fa-utensils"></i>
        <span>Arima</span>
      </a>
    `;
  }
}

export default BrandLogo;
