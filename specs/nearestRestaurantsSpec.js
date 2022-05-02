/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import NearestRestaurants from '../src/scripts/components/main/nearest-restaurants';

const defineNearestRestaurants = () => {
  if (!customElements.get('nearest-restaraunts')) {
    customElements.define('nearest-restaurants', NearestRestaurants);
  }
};

const createNearestRestaurants = ({ id, city }) => {
  const NearestRestaurantsElement = document.createElement('nearest-restaurants');
  NearestRestaurantsElement.restaurantData = {
    id,
    city,
    all: TestFactories.createDummyRestaurants(5),
  };
  document.body.appendChild(NearestRestaurantsElement);
};

describe('Nearest restaurants', () => {
  beforeAll(() => {
    TestFactories.initLanguage();
    defineNearestRestaurants();
  });

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should display nearest restaurants if available nearest restaurants', () => {
    // id 1 = Bandung, id 2 = Bogor, id 3 = Jakarta, id 4-... = Bandung
    createNearestRestaurants({ id: 1, city: 'Bandung' });

    const nearestItem = document.querySelectorAll('nearest-restaurants .restaurant-item');
    expect(nearestItem).toBeTruthy();
    expect(nearestItem.length).toEqual(2);
  });

  it('should not display nearest restaurants if not available nearest restaurants', () => {
    createNearestRestaurants({ id: 3, city: 'Jakarta' });

    const nearestItem = document.querySelector('nearest-restaurants .restaurant-item');
    expect(nearestItem).toBeFalsy();
  });
});
