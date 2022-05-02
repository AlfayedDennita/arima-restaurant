class FooterBottom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <span data-lang="14">Copyright &copy; 2020 <b>Arima</b></span>
      <span data-lang="15">Made with <i class="fas fa-heart fa-fw"></i> by <b>Alfayed Dennita</b></span>
    `;
  }
}

export default FooterBottom;
