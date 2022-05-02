import Header from '../../app-shell/header';
import RestaurantsContainer from '../../components/main/restaurants-container';
import { Language } from '../../utils/preferences-presenter';

const HomeTemplate = {
  template() {
    return `
      <full-jumbotron></full-jumbotron>
      <main-content></main-content>
    `;
  },

  result(container) {
    const mainContainer = container;
    mainContainer.innerHTML = this.template();

    this.mainContent = document.querySelector('main-content');

    Header.dynamicHeaderBackground();
    Header.arrowStyleSkipButtonInit();
    Header.skipToContentEvent(this.mainContent);

    document.body.className = '';
    document.body.classList.add('home');

    this.renderSkeleton();
  },

  renderSkeleton() {
    this.appendBestRating();
    this.appendRestaurantsContainer();
    this.appendRestaurantList();
  },

  appendBestRating() {
    const bestRatingElement = document.createElement('best-rating');
    this.mainContent.appendChild(bestRatingElement);
    const bestListElement = document.createElement('best-list');
    bestListElement.skeleton = 3;
    bestRatingElement.appendChild(bestListElement);
  },

  appendRestaurantsContainer() {
    const restaurantsContainerElement = document.createElement('restaurants-container');
    this.restaurantsContainer = restaurantsContainerElement;
    restaurantsContainerElement.heading = {
      title: Language.getSpecificContent('recommended-restaurants'),
    };
    this.mainContent.appendChild(restaurantsContainerElement);
    restaurantsContainerElement.innerHTML += RestaurantsContainer.skeletonTemplate();
  },

  appendRestaurantList() {
    const restaurantListElement = document.createElement('restaurant-list');
    restaurantListElement.skeleton = 12;
    this.restaurantsContainer.appendChild(restaurantListElement);
  },
};

export default HomeTemplate;
