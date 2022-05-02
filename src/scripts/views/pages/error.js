import ErrorTemplate from '../templates/error-template';
import Header from '../../app-shell/header';

const Error = {
  render(container) {
    ErrorTemplate.result(container);
  },

  afterRender() {
    const errorPage = document.querySelector('error-page');

    Header.staticHeaderBackground();
    Header.regularStyleSkipButtonInit();
    Header.skipToContentEvent(errorPage);

    document.body.className = '';
    document.body.classList.add('error');
  },
};

export default Error;
