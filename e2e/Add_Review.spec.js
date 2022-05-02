/* eslint-disable no-undef */

const assert = require('assert');

const nameInput = '.name-review input';
const reviewInput = '.content-review textarea';
const addButton = '.add-review button';
const toastItem = 'toast-item';

Feature('Add Review');

Before((I) => {
  I.amOnPage('/');
  I.seeElement('restaurant-list .restaurant-item');
  I.click(locate('restaurant-list .restaurant-item').first());
  I.seeElement('detail-reviews');
  I.seeElement('.add-review');
});

Scenario('all input is not filled', (I) => {
  I.seeElement(addButton);
  I.click(addButton);
  I.seeElement(toastItem);
  I.see('Form must be filled!', toastItem);
});

Scenario('partially input is not filled', (I) => {
  I.seeElement(nameInput);
  I.fillField(nameInput, 'Jane Doe');
  I.seeElement(addButton);
  I.click(addButton);
  I.seeElement(toastItem);
  I.see('Form must be filled!', toastItem);
});

Scenario('all input is filled', async (I) => {
  I.seeElement(nameInput);
  const name = 'Jane Doe';
  I.fillField(nameInput, name);
  I.seeElement(reviewInput);
  const review = 'Nice taste';
  I.fillField(reviewInput, review);
  I.seeElement(addButton);
  I.click(addButton);
  I.seeElement(toastItem);
  I.see('Review has been added.', toastItem);

  const newReviewItem = locate('.review-item').first();
  I.seeElement(newReviewItem);
  const nameInNewReviewItem = await I.grabTextFrom('.review-item:first-of-type .name');
  const reviewInNewReviewItem = await I.grabTextFrom('.review-item:first-of-type .content-review');
  assert.strictEqual(name, nameInNewReviewItem);
  assert.strictEqual(review, reviewInNewReviewItem);
});

Scenario('show all reviews', async (I) => {
  const showAllButton = '.show-all';
  const numberOfShowAllButton = await I.grabNumberOfVisibleElements(showAllButton);
  if (numberOfShowAllButton > 0) {
    const totalReviewsBeforeShowAll = await I.grabNumberOfVisibleElements('.review-item');
    I.click(showAllButton);
    const totalReviewsAfterShowAll = await I.grabNumberOfVisibleElements('.review-item');
    assert(totalReviewsBeforeShowAll < totalReviewsAfterShowAll);
  }
});
