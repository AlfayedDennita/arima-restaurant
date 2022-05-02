import HomeTemplate from '../templates/home-template';
import RestaurantSource from '../../data/api-source';
import RestaurantsContainer from '../../components/main/restaurants-container';
import RestaurantList from '../../components/main/restaurant-list';
import BestRatingPresenter from '../../utils/best-rating-presenter';
import { searchComponents, NameSearch, CitySearch } from '../../utils/search-presenter';
import { Language } from '../../utils/preferences-presenter';

const Home = {
  render(container) {
    HomeTemplate.result(container);
  },

  async afterRender() {
    const restaurantsData = await RestaurantSource.allRestaurants();

    this.mainContent = document.querySelector('main-content');

    if (restaurantsData.status) {
      this.restaurants = restaurantsData.output.restaurants;
      this.afterRenderSuccess();
    } else {
      this.afterRenderFailed(restaurantsData.output);
    }
  },

  afterRenderSuccess() {
    this.removeRestaurantSkeleton();
    this.appendRestaurantSearch();
    this.showRestaurantList();
    this.initFeatures();
  },

  removeRestaurantSkeleton() {
    const searchSkeleton = document.querySelector('restaurants-container > .skeleton');
    searchSkeleton.remove();

    const restaurantList = document.querySelector('restaurant-list');
    restaurantList.remove();
  },

  appendRestaurantSearch() {
    this.restaurantsContainer = document.querySelector('restaurants-container');
    this.restaurantsContainer.innerHTML += RestaurantsContainer.searchTemplate();
  },

  showRestaurantList() {
    const restaurantListElement = document.createElement('restaurant-list');
    this.restaurantList = restaurantListElement;
    restaurantListElement.showHalf = this.restaurants;
    this.restaurantsContainer.appendChild(restaurantListElement);
  },

  initFeatures() {
    RestaurantList.showAllEvent(this.restaurantList, this.restaurants);

    BestRatingPresenter.init({
      restaurants: this.restaurants,
      container: document.querySelector('best-rating'),
      bestList: document.querySelector('best-list'),
    });

    Object.assign(searchComponents, {
      restaurants: this.restaurants,
      restaurantList: this.restaurantList,
      noticeContainer: document.querySelector('restaurants-container .notice'),
      inputForm: document.querySelector('.search-restaurant input'),
    });

    CitySearch.init({
      displayButton: document.querySelector('.search-city'),
      floatContainer: document.querySelector('.city-list'),
    });

    NameSearch.init();
  },

  afterRenderFailed(message = Language.getSpecificContent('something-wrong')) {
    const errorPageElement = document.createElement('error-page');
    errorPageElement.errorData = {
      iconClass: 'fas fa-sad-cry',
      title: Language.getSpecificContent('cannot-load-restaurants'),
      message,
    };
    this.mainContent.innerHTML = '';
    this.mainContent.appendChild(errorPageElement);
  },
};

export default Home;
