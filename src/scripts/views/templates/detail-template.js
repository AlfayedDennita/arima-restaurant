import Header from '../../app-shell/header';

const DetailTemplate = {
  template() {
    return `
      <main-content></main-content>
    `;
  },

  result(container) {
    const mainContainer = container;
    mainContainer.innerHTML = this.template();

    this.mainContent = document.querySelector('main-content');

    Header.staticHeaderBackground();
    Header.regularStyleSkipButtonInit();
    Header.skipToContentEvent(this.mainContent);

    document.body.className = '';
    document.body.classList.add('detail');

    this.renderSkeleton();
  },

  renderSkeleton() {
    const detailContainerElement = document.createElement('detail-container');
    detailContainerElement.skeleton = 6;
    this.mainContent.appendChild(detailContainerElement);
  },
};

export default DetailTemplate;
