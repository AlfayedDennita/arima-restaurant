import FooterTop from '../components/footer/footer-top';
import FooterBottom from '../components/footer/footer-bottom';

const Footer = {
  init({ container }) {
    this.container = container;
    this.defineCustomElements();
    this.createFooterTop();
    this.createFooterBottom();
  },

  defineCustomElements() {
    customElements.define('footer-top', FooterTop);
    customElements.define('footer-bottom', FooterBottom);
  },

  createFooterTop() {
    const footerTopElement = document.createElement('footer-top');
    this.container.appendChild(footerTopElement);
  },

  createFooterBottom() {
    const footerBottomElement = document.createElement('footer-bottom');
    this.container.appendChild(footerBottomElement);
  },
};

export default Footer;
