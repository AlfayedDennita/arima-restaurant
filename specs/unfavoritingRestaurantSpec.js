/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import { RestaurantIdb } from '../src/scripts/data/idb-source';

describe('Unfavoriting a restaurant', () => {
  beforeAll(() => {
    TestFactories.initLanguage();
  });

  beforeEach(async () => {
    TestFactories.initAddFavoriteRequirements();
    await RestaurantIdb.putRestaurant({ id: 1 }, 1);
    await TestFactories.createAddFavoritePresenter({ id: 1 });
  });

  afterEach(async () => {
    await RestaurantIdb.deleteRestaurant(1);
  });

  it('should display unfavorite button when restaurant has been favorited before', async () => {
    const unfavoriteButton = document.querySelector('[data-favorites="unfavorite"]');
    expect(unfavoriteButton).toBeTruthy();
  });

  it('should not display favorite button when restaurant has been favorited before', async () => {
    const favoriteButton = document.querySelector('[data-favorites="favorite"]');
    expect(favoriteButton).toBeFalsy();
  });

  it('should be able to remove restaurant from the favorites', async () => {
    const unfavoriteButton = document.querySelector('[data-favorites="unfavorite"]');
    unfavoriteButton.dispatchEvent(new Event('click'));

    const allRestaurants = await RestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([]);
  });

  it('should not throw the error if the restaurant is not in favorites', async () => {
    await RestaurantIdb.deleteRestaurant(1);

    const unfavoriteButton = document.querySelector('[data-favorites="unfavorite"]');
    unfavoriteButton.dispatchEvent(new Event('click'));

    const allRestaurants = await RestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([]);
  });
});
