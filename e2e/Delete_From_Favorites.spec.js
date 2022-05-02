/* eslint-disable no-undef */

Feature('Delete Restaurant from Favorites');

const restaurantItem = 'restaurant-list .restaurant-item';

Before((I) => {
  I.amOnPage('/');
  I.seeElement(restaurantItem);
  I.click(locate(restaurantItem).first());

  const favoriteButton = 'button[data-favorites="favorite"]';
  I.seeElement(favoriteButton);
  I.click(favoriteButton);
  I.seeElement('toast-item');
  I.see('Restaurant has been added to favorites.', 'toast-item');
});

Scenario('delete restaurant from favorites', (I) => {
  I.amOnPage('/#/favorites');
  I.seeElement(restaurantItem);
  I.click(restaurantItem);

  const unfavoriteButton = 'button[data-favorites="unfavorite"]';
  I.seeElement(unfavoriteButton);
  I.click(unfavoriteButton);
  I.seeElement('toast-item');
  I.see('Restaurant has been deleted from favorites.', 'toast-item');

  I.amOnPage('/#/favorites');
  I.seeElement('error-page');
  I.see('No Favorites Restaurant');
});
