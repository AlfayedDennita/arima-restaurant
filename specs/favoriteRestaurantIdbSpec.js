/* eslint-disable no-undef */

import isActsAsFavoritesRestaurantModel from './contract/favoritesRestaurantContract';
import { RestaurantIdb } from '../src/scripts/data/idb-source';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    const allRestaurants = await RestaurantIdb.getAllRestaurants();
    allRestaurants.forEach(async (restaurant) => {
      await RestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  isActsAsFavoritesRestaurantModel(RestaurantIdb);
});
