import { Language } from '../../utils/preferences-presenter';

class MainContent extends HTMLElement {
  connectedCallback() {
    this.setAttribute('aria-label', Language.getSpecificContent('main-content'));
  }
}

export default MainContent;
