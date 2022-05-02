import FavoritesTemplate from '../templates/favorites-template';
import { RestaurantIdb } from '../../data/idb-source';
import RestaurantList from '../../components/main/restaurant-list';
import { Language } from '../../utils/preferences-presenter';

const Favorites = {
  render(container) {
    FavoritesTemplate.result(container);
  },

  async afterRender() {
    this.restaurants = await RestaurantIdb.getAllRestaurants();

    this.mainContent = document.querySelector('main-content');

    if (this.isRestaurantsExist()) {
      this.afterRenderSuccess();
    } else {
      this.afterRenderFailed();
    }
  },

  isRestaurantsExist() {
    return this.restaurants && this.restaurants.length > 0;
  },

  afterRenderSuccess() {
    this.showRestaurantList();
    this.initFeatures();
  },

  showRestaurantList() {
    this.restaurantList = document.querySelector('restaurant-list');
    this.restaurantList.showHalf = this.restaurants;
  },

  initFeatures() {
    RestaurantList.showAllEvent(this.restaurantList, this.restaurants);
  },

  afterRenderFailed() {
    const errorPageElement = document.createElement('error-page');
    errorPageElement.errorData = {
      iconClass: 'fas fa-box-open',
      title: Language.getSpecificContent('no-favorites'),
      message: Language.getSpecificContent('no-favorites-message'),
    };
    this.mainContent.innerHTML = '';
    this.mainContent.appendChild(errorPageElement);
  },
};

export default Favorites;
