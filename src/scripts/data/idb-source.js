import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE.RESTAURANTS, { keypath: 'id' });
    database.createObjectStore(OBJECT_STORE.PREFERENCES, { keypath: 'type' });
  },
});

const RestaurantIdb = {
  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE.RESTAURANTS);
  },

  async getRestaurant(id) {
    return (id) ? (await dbPromise).get(OBJECT_STORE.RESTAURANTS, id) : undefined;
  },

  async putRestaurant(restaurant, id) {
    return (restaurant.id && id) ? (await dbPromise)
      .put(OBJECT_STORE.RESTAURANTS, restaurant, id) : false;
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE.RESTAURANTS, id);
  },
};

const PreferenceIdb = {
  async getPreference(type) {
    return (type) ? (await dbPromise).get(OBJECT_STORE.PREFERENCES, type) : undefined;
  },

  async putPreference(preference, type) {
    return (preference.type && type) ? (await dbPromise)
      .put(OBJECT_STORE.PREFERENCES, preference, type) : false;
  },

  async deletePreference(type) {
    return (await dbPromise).delete(OBJECT_STORE.PREFERENCES, type);
  },
};

export { RestaurantIdb, PreferenceIdb };
