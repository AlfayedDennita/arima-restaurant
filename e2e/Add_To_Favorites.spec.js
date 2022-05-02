/* eslint-disable no-undef */

const assert = require('assert');

const restaurantItem = 'restaurant-list .restaurant-item';

Feature('Add Restaurant to Favorites');

Scenario('showing empty favorites restaurant', (I) => {
  I.amOnPage('/#/favorites');
  I.seeElement('error-page');
  I.see('No Favorites Restaurant');
});

Scenario('add restaurant to favorites and then delete it from favorites', async (I) => {
  I.amOnPage('/');
  I.seeElement(restaurantItem);
  const firstRestaurantTitle = await I.grabTextFrom(locate('restaurant-list .restaurant-item h3').first());
  I.click(locate(restaurantItem).first());

  const favoriteButton = 'button[data-favorites="favorite"]';
  I.seeElement(favoriteButton);
  I.click(favoriteButton);
  I.seeElement('toast-item');
  I.see('Restaurant has been added to favorites.', 'toast-item');

  I.amOnPage('/#/favorites');
  I.seeElement(restaurantItem);
  const favoritedRestaurantTitle = await I.grabTextFrom('restaurant-list .restaurant-item h3');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
  I.click(restaurantItem);

  const unfavoriteButton = 'button[data-favorites="unfavorite"]';
  I.seeElement(unfavoriteButton);
  I.click(unfavoriteButton);
  I.seeElement('toast-item');
  I.see('Restaurant has been deleted from favorites.', 'toast-item');
});
