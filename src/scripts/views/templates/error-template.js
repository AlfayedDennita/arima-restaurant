import { Language } from '../../utils/preferences-presenter';

const ErrorTemplate = {
  result(container) {
    const mainContainer = container;
    const errorPageElement = document.createElement('error-page');

    errorPageElement.errorData = {
      iconClass: 'fas fa-exclamation-triangle',
      title: Language.getSpecificContent('page-not-found'),
      message: '<a href="/#/home" class="button" title="Back to Home" data-lang="38">Back to Home</a>',
    };

    mainContainer.innerHTML = '';
    mainContainer.appendChild(errorPageElement);
  },
};

export default ErrorTemplate;
