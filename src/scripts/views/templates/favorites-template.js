import Header from '../../app-shell/header';
import { Language } from '../../utils/preferences-presenter';

const FavoriteTemplate = {
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
    document.body.classList.add('favorites');

    this.renderSkeleton();
  },

  renderSkeleton() {
    this.appendRestaurantsContainer();
    this.appendRestaurantList();
  },

  appendRestaurantsContainer() {
    const restaurantsContainerElement = document.createElement('restaurants-container');
    this.restaurantsContainer = restaurantsContainerElement;
    restaurantsContainerElement.heading = {
      title: Language.getSpecificContent('favorites-restaurant'),
    };
    this.mainContent.appendChild(restaurantsContainerElement);
  },

  appendRestaurantList() {
    const restaurantListElement = document.createElement('restaurant-list');
    restaurantListElement.skeleton = 4;
    this.restaurantsContainer.appendChild(restaurantListElement);
  },
};

export default FavoriteTemplate;
