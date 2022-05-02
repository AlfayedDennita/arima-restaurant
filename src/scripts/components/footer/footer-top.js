class FooterTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <brand-logo></brand-logo>
      <ul>
        <li><a href="https://github.com/alfayeddennita" target="_blank" rel="noopener" class="button" title="GitHub" aria-label="GitHub"><i class="fab fa-github-square"></i></a></li>
        <li><a href="https://www.facebook.com/AlfayedDennita" target="_blank" rel="noopener" class="button" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="https://www.instagram.com/alfayeddennita" target="_blank" rel="noopener" class="button" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://id.pinterest.com/AlfayedDennita" target="_blank" rel="noopener" class="button" title="Pinterest" aria-label="Pinterest"><i class="fab fa-pinterest-square"></i></a></li>
      </ul>
    `;
  }
}

export default FooterTop;
