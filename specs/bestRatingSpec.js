/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import BestList from '../src/scripts/components/main/best-list';
import BestItem from '../src/scripts/components/main/best-item';
import BestRatingPresenter from '../src/scripts/utils/best-rating-presenter';

const defineBestRating = () => {
  if (!(customElements.get('best-list') && customElements.get('best-item'))) {
    customElements.define('best-list', BestList);
    customElements.define('best-item', BestItem);
  }
};

const createBestRatingPresenter = (restaurants) => {
  BestRatingPresenter.init({
    restaurants,
    container: document.body,
  });
};

describe('Restaurant list', () => {
  beforeAll(() => {
    TestFactories.initLanguage();
    defineBestRating();
  });

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should display best list and best item', async () => {
    const restaurants = [
      {
        id: 1,
        name: 'Restaurant 1',
        city: 'Jakarta',
        rating: 4.7,
        pictureId: '1',
      },
    ];

    createBestRatingPresenter(restaurants);

    const bestList = document.querySelectorAll('best-list');
    const bestItem = document.querySelectorAll('best-item');
    expect(bestList).toBeTruthy();
    expect(bestItem).toBeTruthy();
  });

  it('should display best item if only one best rating restaurant', async () => {
    const restaurants = [
      {
        id: 1,
        name: 'Restaurant 1',
        city: 'Jakarta',
        rating: 4.7,
        pictureId: '1',
      },
      {
        id: 2,
        name: 'Restaurant 2',
        city: 'Jakarta',
        rating: 4.5,
        pictureId: '2',
      },
    ];

    createBestRatingPresenter(restaurants);

    const ratingContainer = document.querySelectorAll('.best-rating span');

    expect(ratingContainer.length).toEqual(1);
    expect(Number(ratingContainer[0].innerHTML)).toEqual(restaurants[0].rating);
  });

  it('should display all best item if all restaurant rating is same', () => {
    const restaurants = [
      {
        id: 1,
        name: 'Restaurant 1',
        city: 'Jakarta',
        rating: 4.3,
        pictureId: '1',
      },
      {
        id: 2,
        name: 'Restaurant 2',
        city: 'Jakarta',
        rating: 4.3,
        pictureId: '2',
      },
    ];

    createBestRatingPresenter(restaurants);

    const ratingContainer = document.querySelectorAll('.best-rating span');

    expect(ratingContainer.length).toEqual(2);
    expect(Number(ratingContainer[0].innerHTML)).toEqual(restaurants[0].rating);
    expect(Number(ratingContainer[1].innerHTML)).toEqual(restaurants[1].rating);
  });
});
