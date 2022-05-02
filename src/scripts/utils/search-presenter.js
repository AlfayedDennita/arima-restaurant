import RestaurantList from '../components/main/restaurant-list';
import { Language } from './preferences-presenter';

const searchComponents = {};

const ActionSearch = {
  configFiltered({ type, keyword, filteredRestaurants }) {
    if (filteredRestaurants.length > 0) {
      this.renderSuccessNotice(type, keyword);
    } else {
      this.renderFailedNotice(keyword);
    }
    this.renderFilteredRestaurants(filteredRestaurants);
  },

  renderSuccessNotice(type, keyword) {
    const { noticeContainer } = searchComponents;
    noticeContainer.innerHTML = `
      <span data-lang="23">Result search by</span> <span data-lang="${type}">${type}</span>: <span class="keyword">"${keyword}"</span><button class="reset-search" title="Reset Search Settings" data-lang="24">Reset</button>
    `;
    const searchTypeLanguage = document.querySelector(`[data-lang="${type}"]`);
    searchTypeLanguage.innerHTML = Language.getSpecificContent(type);
    Language.setGeneralLanguageByRange(23, 24);
    this.afterRenderNotice();
  },

  renderFailedNotice(keyword) {
    const { noticeContainer } = searchComponents;
    noticeContainer.innerHTML = `
      <span class="keyword">"${keyword}"</span> <span data-lang="25">is <strong>not found</strong></span><button class="reset-search" title="Reset Search Settings" data-lang="24">Reset</button>
    `;
    Language.setGeneralLanguageByRange(24, 25);
    this.afterRenderNotice();
  },

  afterRenderNotice() {
    const resetButton = document.querySelector('.reset-search');
    resetButton.addEventListener('click', () => this.resetSearch());
  },

  resetSearch() {
    const { noticeContainer, inputForm } = searchComponents;
    noticeContainer.innerHTML = '';
    inputForm.value = '';
    this.renderAllRestaurants();
  },

  renderAllRestaurants() {
    const { restaurants } = searchComponents;
    return this.renderRestaurants(restaurants);
  },

  renderFilteredRestaurants(filteredRestaurants) {
    const restaurants = filteredRestaurants;
    return this.renderRestaurants(restaurants);
  },

  renderRestaurants(restaurants) {
    const { restaurantList } = searchComponents;
    restaurantList.showHalf = restaurants;
    if (restaurants.length > 12) this.afterRenderRestaurants(restaurants);
  },

  afterRenderRestaurants(restaurants) {
    const { restaurantList } = searchComponents;
    Language.setGeneralLanguageByRange(22);
    RestaurantList.showAllEvent(restaurantList, restaurants);
  },
};

const NameSearch = {
  async init() {
    this.restaurants = searchComponents.restaurants;
    this.searchByName();
  },

  searchByName() {
    const { noticeContainer, inputForm } = searchComponents;
    inputForm.addEventListener('keyup', () => {
      const keyword = inputForm.value;
      const filteredRestaurants = this.filteringRestaurants(keyword);
      if (keyword === '') {
        ActionSearch.renderAllRestaurants();
        noticeContainer.innerHTML = '';
      } else {
        ActionSearch.configFiltered({
          type: 'name',
          keyword,
          filteredRestaurants,
        });
      }
    });
  },

  filteringRestaurants(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    return this.restaurants
      .filter((restaurant) => restaurant.name.toLowerCase().indexOf(lowerCaseKeyword) >= 0);
  },
};

const CitySearch = {
  init({ displayButton, floatContainer }) {
    this.displayButton = displayButton;
    this.floatContainer = floatContainer;
    this.restaurants = searchComponents.restaurants;
    this.dropDownConfig();
  },

  dropDownConfig() {
    this.displayButtonConfig();
    this.renderCity();
  },

  displayButtonConfig() {
    this.displayButton.addEventListener('click', () => this.dropDownToggle());
  },

  dropDownToggle() {
    const arrowIcon = document.querySelector('.search-city svg:last-of-type');
    arrowIcon.classList.toggle('fa-rotate-180');
    this.floatContainer.classList.toggle('show');
  },

  renderCity() {
    const { restaurants } = this;
    const cities = restaurants.map((restaurant) => restaurant.city);
    const uniqueCities = [...new Set(cities)].sort();
    uniqueCities.forEach((city) => {
      this.floatContainer.innerHTML += `
        <li>
          <button title="${city}" data-city="${city}">${city}</button>
        </li>
      `;
    });
    this.searchByCity();
  },

  searchByCity() {
    const buttonsCity = document.querySelectorAll('.city-list button');
    buttonsCity.forEach((button) => {
      button.addEventListener('click', () => {
        const city = button.getAttribute('data-city');
        const filteredRestaurants = this.filteringRestaurants(city);
        ActionSearch.configFiltered({
          type: 'city',
          keyword: city,
          filteredRestaurants,
        });
      });
    });
  },

  filteringRestaurants(city) {
    return this.restaurants.filter((restaurant) => restaurant.city === city);
  },
};

export { searchComponents, NameSearch, CitySearch };
