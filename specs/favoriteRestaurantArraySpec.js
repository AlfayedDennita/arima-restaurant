/* eslint-disable no-undef */

import isActsAsFavoritesRestaurantModel from './contract/favoritesRestaurantContract';

let favoritesRestaurant = [];

const FavoritesRestaurantArray = {
  getAllRestaurants() {
    return favoritesRestaurant;
  },

  getRestaurant(id) {
    return (id) ? favoritesRestaurant.find((restaurant) => restaurant.id === id) : undefined;
  },

  putRestaurant(restaurant, id) {
    return (restaurant.id && id) ? favoritesRestaurant.push(restaurant) : false;
  },

  deleteRestaurant(id) {
    favoritesRestaurant = favoritesRestaurant.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoritesRestaurant = [];
  });

  isActsAsFavoritesRestaurantModel(FavoritesRestaurantArray);
});
