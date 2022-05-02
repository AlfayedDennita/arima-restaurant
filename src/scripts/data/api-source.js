import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';
import { Language } from '../utils/preferences-presenter';

const RestaurantSource = {
  async allRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.ALL);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error(responseJson.message);
      }

      if (responseJson.count < 1 || responseJson.restaurants.length < 1) {
        throw new Error(Language.getSpecificContent('no-restaurant-list'));
      }

      return {
        status: true,
        output: responseJson,
      };
    } catch (error) {
      return {
        status: false,
        output: error.message,
      };
    }
  },

  async detailRestaurant(id) {
    try {
      if (!id || id === '') {
        throw new Error('need id');
      }

      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error(responseJson.message);
      }

      return {
        status: true,
        output: responseJson,
      };
    } catch (error) {
      return {
        status: false,
        output: error.message,
      };
    }
  },

  async addReview({ id, name, review }) {
    try {
      if (!id || id === '') {
        throw new Error('need id');
      }

      if (!name || name === '' || !review || review === '') {
        throw new Error('need name and content review');
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.KEY,
        },
        body: JSON.stringify({ id, name, review }),
      };

      const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
      const responseJson = await response.json();

      if (responseJson.error) {
        throw new Error(responseJson.message);
      }

      return {
        status: true,
        output: responseJson,
      };
    } catch (error) {
      return {
        status: false,
        output: error.message,
      };
    }
  },
};

export default RestaurantSource;
