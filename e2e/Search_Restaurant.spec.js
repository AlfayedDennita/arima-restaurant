/* eslint-disable no-undef */

const assert = require('assert');

const nameInput = 'input#search-name';

Feature('Search Restaurant');

Before((I) => {
  I.amOnPage('/');
  I.seeElement('restaurant-list .restaurant-item');
});

Scenario('search restaurant by complete name', async (I) => {
  I.seeElement(nameInput);
  const completeName = await I.grabTextFrom(locate('restaurant-list .restaurant-item h3').first());
  I.fillField(nameInput, completeName);
  I.seeElement('.keyword');
  I.see(completeName, '.keyword');
  I.seeElement('restaurant-list .restaurant-item');
  const searchResultName = await I.grabTextFrom(locate('restaurant-list .restaurant-item h3').first());
  assert.strictEqual(completeName, searchResultName);
});

Scenario('search restaurant by uncomplete name', async (I) => {
  I.seeElement(nameInput);
  const completeName = await I.grabTextFrom(locate('restaurant-list .restaurant-item h3').first());
  const uncompleteName = completeName.slice(1, 2);
  I.fillField(nameInput, uncompleteName);
  I.seeElement('.keyword');
  I.see(uncompleteName, '.keyword');
  I.seeElement('restaurant-list .restaurant-item');
  const totalRestaurantsMatched = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
  for (let i = 1; i <= totalRestaurantsMatched; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const searchResultName = await I.grabTextFrom(locate('restaurant-list .restaurant-item h3').at(i));
    assert.match(searchResultName.toLowerCase(), new RegExp(uncompleteName));
  }
});

Scenario('search restaurant by city', async (I) => {
  const displayButton = 'button.search-city';
  const floatButtons = 'button[data-city]';
  I.seeElement(displayButton);
  I.click(displayButton);
  I.seeElement(floatButtons);
  I.click(locate(floatButtons).first());
  const cityInFloatButton = await I.grabTextFrom(locate(floatButtons).first());
  I.seeElement('.keyword');
  I.see(cityInFloatButton, '.keyword');
  I.seeElement('restaurant-list .restaurant-item');
  const totalRestaurantsMatched = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
  for (let i = 1; i <= totalRestaurantsMatched; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const resultCity = await I.grabTextFrom(`restaurant-list .restaurant-item:nth-child(${i}) .restaurant-image span`);
    assert.strictEqual(resultCity, cityInFloatButton.toUpperCase());
  }
});

Scenario('not found restaurant', (I) => {
  I.seeElement(nameInput);
  const randomName = '[)$(!).. best restaurant in the world ,#$!(!*%!*@$!';

  I.fillField(nameInput, randomName);
  I.see('not found', '.notice span strong');
  I.dontSeeElement('restaurant-list .restaurant-item');
});

Scenario('reset search', async (I) => {
  const totalRestaurantsByDefault = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
  I.seeElement(nameInput);
  const completeName = await I.grabTextFrom(locate('restaurant-list .restaurant-item h3').first());
  I.fillField(nameInput, completeName);

  const totalRestaurantsAfterSearch = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
  assert(totalRestaurantsByDefault >= totalRestaurantsAfterSearch);

  I.seeElement('.reset-search');
  I.click('.reset-search');

  const totalRestaurantsAfterReset = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
  assert.strictEqual(totalRestaurantsByDefault, totalRestaurantsAfterReset);
});

Scenario('show all restaurant', async (I) => {
  const showAllButton = '.show-all';
  const numberOfShowAllButton = await I.grabNumberOfVisibleElements(showAllButton);
  if (numberOfShowAllButton > 0) {
    const totalRestaurantsBeforeShowAll = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
    I.click(showAllButton);
    const totalRestaurantsAfterShowAll = await I.grabNumberOfVisibleElements('restaurant-list .restaurant-item');
    assert(totalRestaurantsBeforeShowAll < totalRestaurantsAfterShowAll);
  }
});
