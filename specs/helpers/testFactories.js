import { RestaurantIdb } from '../../src/scripts/data/idb-source';
import AddFavoritePresenter from '../../src/scripts/utils/add-favorite-presenter';

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const initLanguage = () => {
  const rootElement = document.documentElement;
  rootElement.setAttribute('lang', 'en');
};

export const createDummyRestaurants = (total) => {
  const restaurants = [];
  const cities = ['Bandung', 'Bogor', 'Jakarta'];
  for (let i = 1; i <= total; i += 1) {
    restaurants.push({
      id: i,
      name: `Restaurant ${i}`,
      description: `Description ${i}`,
      pictureId: `${i}`,
      city: cities[i - 1] || cities[i - i],
      rating: Math.round(Math.random() * 50) / 10, // random number between 0 to 5
    });
  }
  return restaurants;
};

export const initAddFavoriteRequirements = () => {
  document.body.innerHTML = `
    <div class="add-to-favorites"></div>
    <toast-container></toast-container>
  `;
};

export const createAddFavoritePresenter = async (restaurant) => {
  await AddFavoritePresenter.init({
    restaurant,
    favoritesRestaurant: RestaurantIdb,
    buttonContainer: document.querySelector('.add-to-favorites'),
    toastContainer: document.querySelector('toast-container'),
  });
};
