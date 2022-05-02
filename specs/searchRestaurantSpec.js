/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import RestaurantsContainer from '../src/scripts/components/main/restaurants-container';
import RestaurantList from '../src/scripts/components/main/restaurant-list';
import { searchComponents, NameSearch, CitySearch } from '../src/scripts/utils/search-presenter';

const defineRestaurantList = () => {
  if (!customElements.get('restaurant-list')) {
    customElements.define('restaurant-list', RestaurantList);
  }
};

const createRestaurantList = (restaurants) => {
  const restaurantListElement = document.createElement('restaurant-list');
  restaurantListElement.showHalf = restaurants;
  document.body.appendChild(restaurantListElement);
  return restaurantListElement;
};

const createSearchRestaurantPresenter = (restaurants) => {
  Object.assign(searchComponents, {
    restaurants,
    restaurantList: document.querySelector('restaurant-list'),
    noticeContainer: document.querySelector('.notice'),
    inputForm: document.querySelector('.search-restaurant input'),
  });
};

const createSearchByNamePresenter = () => {
  NameSearch.init();
};

const createSearchByCityPresenter = () => {
  CitySearch.init({
    displayButton: document.querySelector('.search-city'),
    floatContainer: document.querySelector('.city-list'),
  });
};

describe('Searching restaurant', () => {
  beforeAll(() => {
    TestFactories.initLanguage();
    defineRestaurantList();
  });

  beforeEach(() => {
    document.body.innerHTML = RestaurantsContainer.searchTemplate();
  });

  it('should not display keyword notice when not searching', () => {
    createRestaurantList(TestFactories.createDummyRestaurants(5));
    const keywordNotice = document.querySelector('.notice .keyword');
    expect(keywordNotice).toBeFalsy();
  });

  it('should not display reset button when not searching', () => {
    createRestaurantList(TestFactories.createDummyRestaurants(5));
    const resetButton = document.querySelector('.reset-search');
    expect(resetButton).toBeFalsy();
  });

  it('should display "show all button" if restaurants more than 12', () => {
    createRestaurantList(TestFactories.createDummyRestaurants(14));
    const showAllButton = document.querySelector('.show-all');
    expect(showAllButton).toBeTruthy();
  });

  it('should not display "show all button" if restaurants less than 12', () => {
    createRestaurantList(TestFactories.createDummyRestaurants(10));
    const showAllButton = document.querySelector('.show-all');
    expect(showAllButton).toBeFalsy();
  });

  it('should be able display all restaurants when click "show all button"', async () => {
    const totalRestaurants = 20;
    const maxRestaurants = 12;
    const restaurants = TestFactories.createDummyRestaurants(totalRestaurants);
    const restaurantList = createRestaurantList(restaurants);
    RestaurantList.showAllEvent(restaurantList, restaurants);

    const restaurantItemBeforeShowAll = document.querySelectorAll('restaurant-list .restaurant-item');
    expect(restaurantItemBeforeShowAll.length).toEqual(maxRestaurants);

    const showAllButton = document.querySelector('.show-all');
    showAllButton.dispatchEvent(new Event('click'));

    const restaurantItemAfterShowAll = document.querySelectorAll('restaurant-list .restaurant-item');
    expect(restaurantItemAfterShowAll.length).toEqual(totalRestaurants);

    const newShowAllButton = document.querySelector('.show-all');
    expect(newShowAllButton).toBeFalsy();
  });

  describe('by name', () => {
    const searchRestaurant = (keyword) => {
      const nameInput = document.querySelector('.search-restaurant input');
      nameInput.value = keyword;
      nameInput.dispatchEvent(new Event('keyup'));
    };

    beforeEach(() => {
      const restaurants = TestFactories.createDummyRestaurants(20);
      createRestaurantList(restaurants);
      createSearchRestaurantPresenter(restaurants);
      createSearchByNamePresenter();
    });

    it('should display name input to search a restaurant', async () => {
      const nameInput = document.querySelector('.search-restaurant input');
      expect(nameInput).toBeTruthy();
    });

    it('should display keyword notice when search name of restaurant', async () => {
      const query = 'Restaurant 1';
      searchRestaurant(query);

      const keywordNotice = document.querySelector('.notice .keyword');
      expect(keywordNotice).toBeTruthy();
      expect(keywordNotice.innerHTML).toMatch(new RegExp(query));
    });

    it('should display reset button when search name of restaurant', async () => {
      searchRestaurant('Restaurant 1');

      const resetButton = document.querySelector('.reset-search');
      expect(resetButton).toBeTruthy();
    });

    it('should display the restaurant if last query matches with available restaurant', async () => {
      const restaurantName = 'Restaurant 20';
      searchRestaurant(restaurantName);

      const filteredRestaurant = NameSearch.filteringRestaurants(restaurantName);
      expect(filteredRestaurant.length).toEqual(1);
      expect(restaurantName).toEqual(filteredRestaurant[0].name);
    });

    it('should display all restaurants that matches with uncomplete query', async () => {
      const uncompleteRestaurantName = 'restaurant 1';
      searchRestaurant(uncompleteRestaurantName);

      const filteredRestaurants = NameSearch.filteringRestaurants(uncompleteRestaurantName);
      const totalFilteredRestaurants = filteredRestaurants.length;
      const nameFilteredRestaurants = []; // should Restaurant 1, Restaurant 10, Restaurant 11, ...
      for (let i = 0; i < totalFilteredRestaurants; i += 1) {
        nameFilteredRestaurants.push(filteredRestaurants[i].name);
      }
      for (let i = 0; i < totalFilteredRestaurants; i += 1) {
        expect(nameFilteredRestaurants[i].toLowerCase())
          .toMatch(new RegExp(uncompleteRestaurantName));
      }
    });

    it('should not display restaurant if query not matches', async () => {
      const notAvailableRestaurant = 'Unknown Restaurant';
      searchRestaurant(notAvailableRestaurant);

      const filteredRestaurant = NameSearch.filteringRestaurants(notAvailableRestaurant);
      expect(filteredRestaurant).toEqual([]);
    });

    it('should reset restaurant list when click reset button', async () => {
      searchRestaurant('Restaurant 1');

      const restaurantItemBeforeReset = document.querySelectorAll('restaurant-list .restaurant-item');

      const resetButton = document.querySelector('.reset-search');
      resetButton.dispatchEvent(new Event('click'));

      const restaurantItemAfterReset = document.querySelectorAll('restaurant-list .restaurant-item');
      expect(restaurantItemAfterReset.length)
        .toBeGreaterThanOrEqual(restaurantItemBeforeReset.length);

      const keywordNoticeAfterReset = document.querySelector('.notice .keyword');
      const resetButtonAfterReset = document.querySelector('.reset-search');
      expect(keywordNoticeAfterReset).toBeFalsy();
      expect(resetButtonAfterReset).toBeFalsy();
    });
  });

  describe('by city', () => {
    beforeEach(() => {
      const restaurants = TestFactories.createDummyRestaurants(20);
      createRestaurantList(restaurants);
      createSearchRestaurantPresenter(restaurants);
      createSearchByCityPresenter();
    });

    it('should display buttons city', () => {
      const buttons = document.querySelectorAll('.city-list button');
      expect(buttons).toBeTruthy();
    });

    it('should display keyword notice when click button city', () => {
      const button = document.querySelector('.city-list button');
      const cityInButton = button.getAttribute('data-city');
      button.dispatchEvent(new Event('click'));

      const keywordNotice = document.querySelector('.notice .keyword');
      expect(keywordNotice).toBeTruthy();
      expect(keywordNotice.innerHTML).toMatch(new RegExp(cityInButton));
    });

    it('should display reset button when click button city', async () => {
      const button = document.querySelector('.city-list button');
      button.dispatchEvent(new Event('click'));

      const resetButton = document.querySelector('.reset-search');
      expect(resetButton).toBeTruthy();
    });

    it('should display restaurants that the city is same with city in button', () => {
      const button = document.querySelector('.city-list button');
      const cityInButton = button.getAttribute('data-city');
      button.dispatchEvent(new Event('click'));

      const filteredRestaurants = CitySearch.filteringRestaurants(cityInButton);
      const totalFilteredRestaurants = filteredRestaurants.length;
      const nameFilteredRestaurants = [];
      for (let i = 0; i < totalFilteredRestaurants; i += 1) {
        nameFilteredRestaurants.push(filteredRestaurants[i].city);
      }
      for (let i = 0; i < totalFilteredRestaurants; i += 1) {
        expect(cityInButton).toEqual(nameFilteredRestaurants[i]);
      }
    });

    it('should reset restaurant list when click reset button', () => {
      const button = document.querySelector('.city-list button');
      button.dispatchEvent(new Event('click'));

      const restaurantItemBeforeReset = document.querySelectorAll('restaurant-list .restaurant-item');

      const resetButton = document.querySelector('.reset-search');
      resetButton.dispatchEvent(new Event('click'));

      const restaurantItemAfterReset = document.querySelectorAll('restaurant-list .restaurant-item');
      expect(restaurantItemAfterReset.length)
        .toBeGreaterThanOrEqual(restaurantItemBeforeReset.length);

      const keywordNoticeAfterReset = document.querySelector('.notice .keyword');
      const resetButtonAfterReset = document.querySelector('.reset-search');
      expect(keywordNoticeAfterReset).toBeFalsy();
      expect(resetButtonAfterReset).toBeFalsy();
    });
  });
});
