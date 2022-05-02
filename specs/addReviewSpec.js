/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import RestaurantSource from '../src/scripts/data/api-source';
import AddReviewPresenter from '../src/scripts/utils/add-review-presenter';
import DetailReviews from '../src/scripts/components/main/detail-reviews';

const defineDetailReviews = () => {
  if (!customElements.get('detail-reviews')) {
    customElements.define('detail-reviews', DetailReviews);
  }
};

const initAddReviewRequirements = () => {
  document.body.innerHTML = `
    <input type="text"></input>
    <textarea></textarea>
    <button class="add-review"></button>
    <toast-container></toast-container>
  `;
};

const createAddReviewPresenter = (restaurantId, reviewContainer) => {
  AddReviewPresenter.init({
    restaurantId,
    nameInput: document.querySelector('input'),
    reviewInput: document.querySelector('textarea'),
    button: document.querySelector('button'),
    reviewContainer,
    toastContainer: document.querySelector('toast-container'),
  });
};

describe('Add review', () => {
  const sendDelay = async () => {
    const sendTimeInMs = 1000;
    await TestFactories.delay(sendTimeInMs);
  };

  const getRestaurantId = async () => {
    const restaurants = await RestaurantSource.allRestaurants();
    return restaurants.output.restaurants[0].id;
  };

  const getReviews = async (id) => {
    const detailRestaurant = await RestaurantSource.detailRestaurant(id);
    return detailRestaurant.output.restaurant.consumerReviews;
  };

  const getTotalReviews = async (id) => {
    const restaurantReviews = await getReviews(id);
    return restaurantReviews.length;
  };

  const fillInput = (name, review) => {
    const nameInput = document.querySelector('input');
    const reviewInput = document.querySelector('textarea');
    nameInput.value = name;
    reviewInput.value = review;
  };

  const clickAddReview = () => {
    const buttonAddReview = document.querySelector('.add-review');
    buttonAddReview.dispatchEvent(new Event('click'));
  };

  const createDummyReviews = (total) => {
    const reviews = [];
    for (let i = 0; i < total; i += 1) {
      reviews.push({
        name: 'Johnny Doe',
        date: '1 January 2020',
        review: 'Good',
      });
    }
    return reviews;
  };

  const appendDetailReviews = (reviews) => {
    const detailReviewsElement = document.createElement('detail-reviews');
    detailReviewsElement.showHalf = reviews;
    document.body.appendChild(detailReviewsElement);
    return detailReviewsElement;
  };

  beforeAll(() => {
    TestFactories.initLanguage();
    defineDetailReviews();
  });

  beforeEach(() => {
    initAddReviewRequirements();
  });

  it('should be able add review if all input is filled', async () => {
    const id = await getRestaurantId();
    const name = 'John Doe (1)';
    const review = 'Good restaurant (1)';

    const totalReviewsBeforeAdd = await getTotalReviews(id);

    const result = await AddReviewPresenter.addReview({ id, name, review });

    const totalReviewsAfterAdd = result.output.customerReviews.length;

    expect(totalReviewsAfterAdd - 1).toEqual(totalReviewsBeforeAdd);
    expect(result.status).toBeTrue();
    expect(result.output.message).toEqual('success');
  });

  it('should not add review if all input is not filled', async () => {
    const id = await getRestaurantId();
    const name = '';
    const review = '';

    const result = await AddReviewPresenter.addReview({ id, name, review });

    expect(result.status).toBeFalse();
    expect(result.output).toEqual('need name and content review');
  });

  it('should not add review if partially input is not filled', async () => {
    const id = await getRestaurantId();
    const name = 'John Doe (2)';
    const review = '';

    const result = await AddReviewPresenter.addReview({ id, name, review });

    expect(result.status).toBeFalse();
    expect(result.output).toEqual('need name and content review');
  });

  it('should not add review if restaurant not have id', async () => {
    const id = '';
    const name = 'John Doe (3)';
    const review = 'Good restaurant (3)';

    const result = await AddReviewPresenter.addReview({ id, name, review });

    expect(result.status).toBeFalse();
    expect(result.output).toEqual('need id');
  });

  it('should be able add review from button if all input is filled', async () => {
    const id = await getRestaurantId();
    const restaurantReviews = await getReviews(id);
    const totalReviewsBeforeAdd = restaurantReviews.length;

    const detailReviews = appendDetailReviews(restaurantReviews);
    createAddReviewPresenter(id, detailReviews);

    fillInput('John Doe (4)', 'Nice (4)');
    clickAddReview();

    await sendDelay();

    const totalReviewsAfterAdd = await getTotalReviews(id);
    expect(totalReviewsAfterAdd - 1).toEqual(totalReviewsBeforeAdd);
  });

  it('should not add review from button if all input is not filled', async () => {
    const id = await getRestaurantId();
    const restaurantReviews = await getReviews(id);
    const totalReviewsBeforeAdd = restaurantReviews.length;

    const detailReviews = appendDetailReviews(restaurantReviews);
    createAddReviewPresenter(id, detailReviews);

    fillInput('', '');
    clickAddReview();

    await sendDelay();

    const totalReviewsAfterAdd = await getTotalReviews(id);
    expect(totalReviewsAfterAdd).toEqual(totalReviewsBeforeAdd);
  });

  it('should display new review item after success add review', async () => {
    const id = await getRestaurantId();
    const restaurantReviews = await getReviews(id);

    const detailReviews = appendDetailReviews(restaurantReviews);
    createAddReviewPresenter(id, detailReviews);

    const newName = 'John Doe (5)';
    const newReview = 'Good taste (5)';

    fillInput(newName, newReview);
    clickAddReview();

    await sendDelay();

    const nameInNewReviewItem = document.querySelector('.review-item .name').innerHTML.trim();
    const reviewinNewReviewItem = document.querySelector('.review-item .content-review').innerHTML.trim();

    expect(nameInNewReviewItem).toEqual(newName);
    expect(reviewinNewReviewItem).toEqual(newReview);
  });

  it('should not display new review item if failed add review', async () => {
    const id = await getRestaurantId();
    const restaurantReviews = await getReviews(id);

    const detailReviews = appendDetailReviews(restaurantReviews);
    createAddReviewPresenter(id, detailReviews);

    const newName = 'John Doe (6)';
    const newReview = '';

    fillInput(newName, newReview);
    clickAddReview();

    await sendDelay();

    const nameInNewReviewItem = document.querySelector('.review-item .name').innerHTML.trim();
    const reviewinNewReviewItem = document.querySelector('.review-item .content-review').innerHTML.trim();

    expect(nameInNewReviewItem).not.toEqual(newName);
    expect(reviewinNewReviewItem).not.toEqual(newReview);
  });

  it('should display "show all" button if reviews more than 3', async () => {
    const reviews = createDummyReviews(4);

    appendDetailReviews(reviews);

    const showAllButton = document.querySelector('.show-all');
    expect(showAllButton).toBeTruthy();
  });

  it('should not display "show all" button if reviews less than 3', async () => {
    const reviews = createDummyReviews(2);

    appendDetailReviews(reviews);

    const showAllButton = document.querySelector('.show-all');
    expect(showAllButton).toBeFalsy();
  });

  it('should be able display all review item if click "show all" button', () => {
    const maxReviewItem = 3;
    const totalDummyReviewItem = 4;
    const reviews = createDummyReviews(totalDummyReviewItem);

    const detailReviews = appendDetailReviews(reviews);

    const totalReviewItemInHalfMode = document.querySelectorAll('.review-item').length;
    expect(totalReviewItemInHalfMode).toEqual(maxReviewItem);

    DetailReviews.showAllEvent(detailReviews, reviews);

    const showAllButton = document.querySelector('.show-all');
    showAllButton.dispatchEvent(new Event('click'));

    const totalReviewItemInAllMode = document.querySelectorAll('.review-item').length;
    expect(totalReviewItemInAllMode).toBeGreaterThan(totalReviewItemInHalfMode);

    const newShowAllButton = document.querySelector('.show-all');
    expect(newShowAllButton).toBeFalsy();
  });
});
