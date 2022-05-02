/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import { RestaurantIdb } from '../src/scripts/data/idb-source';

describe('Favoriting a restaurant', () => {
  beforeAll(() => {
    TestFactories.initLanguage();
  });

  beforeEach(() => {
    TestFactories.initAddFavoriteRequirements();
  });

  it('should display favorite button when restaurant has not been favorited before', async () => {
    await TestFactories.createAddFavoritePresenter({ id: 1 });

    const favoriteButton = document.querySelector('[data-favorites="favorite"]');
    expect(favoriteButton).toBeTruthy();
  });

  it('should not display unfavorite button when restaurant has not been favorited before', async () => {
    await TestFactories.createAddFavoritePresenter({ id: 1 });

    const unfavoriteButton = document.querySelector('[data-favorites="unfavorite"]');
    expect(unfavoriteButton).toBeFalsy();
  });

  it('should be able to add restaurant to favorites', async () => {
    await TestFactories.createAddFavoritePresenter({ id: 1 });

    const favoriteButton = document.querySelector('[data-favorites="favorite"]');
    favoriteButton.dispatchEvent(new Event('click'));

    const restaurant = await RestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await RestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when its already favorited', async () => {
    await TestFactories.createAddFavoritePresenter({ id: 1 });

    await RestaurantIdb.putRestaurant({ id: 1 }, 1);

    const favoriteButton = document.querySelector('[data-favorites="favorite"]');
    favoriteButton.dispatchEvent(new Event('click'));

    const restaurant = await RestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await RestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant when restaurant has no id', async () => {
    await TestFactories.createAddFavoritePresenter({});

    const favoriteButton = document.querySelector('[data-favorites="favorite"]');
    favoriteButton.dispatchEvent(new Event('click'));

    const allRestaurants = await RestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([]);
  });
});
