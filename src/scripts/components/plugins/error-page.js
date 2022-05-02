import { Language } from '../../utils/preferences-presenter';

class ErrorPage extends HTMLElement {
  connectedCallback() {
    this.setAttribute('aria-label', Language.getSpecificContent('error-page'));
  }

  set errorData(error) {
    this.error = error;
    this.render();
  }

  render() {
    const { error } = this;
    this.innerHTML = `
      <i class="${error.iconClass} error-icon"></i>
      <h2>${error.title}</h2>
      <p>${error.message}</p>
    `;
  }
}

export default ErrorPage;
