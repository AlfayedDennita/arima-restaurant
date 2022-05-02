class FullJumbotron extends HTMLElement {
  connectedCallback() {
    this.setAttribute('aria-label', 'Jumbotron');
    this.innerHTML = `
      <h2 data-lang="16">Find your best restaurant from here, only at Arima!</h2>
      <p data-lang="17">#FindTheBest</p>
    `;
  }
}

export default FullJumbotron;
