import ErrorPage from '../components/plugins/error-page';
import ToastContainer from '../components/plugins/toast-container';
import ToastItem from '../components/plugins/toast-item';

const Plugins = {
  init({ container }) {
    this.footerContainer = container;
    this.defineCustomElements();
    this.createToastContainer();
  },

  defineCustomElements() {
    customElements.define('error-page', ErrorPage);
    customElements.define('toast-container', ToastContainer);
    customElements.define('toast-item', ToastItem);
  },

  createToastContainer() {
    const { body } = document;
    const { footerContainer } = this;
    const toastContainerElement = document.createElement('toast-container');
    body.insertBefore(toastContainerElement, footerContainer.nextSibling);
  },
};

export default Plugins;
