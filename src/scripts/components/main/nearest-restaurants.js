import RestaurantSource from '../../data/api-source';
import CONFIG from '../../globals/config';
import { Language } from '../../utils/preferences-presenter';

class NearestRestaurants extends HTMLElement {
  set restaurantData(restaurant) {
    this.restaurantId = restaurant.id;
    this.city = restaurant.city;
    this.allRestaurants = restaurant.all || undefined;
    this.init();
  }

  async init() {
    if (this.allRestaurants) {
      this.restaurants = this.allRestaurants;
      this.filtering();
    } else {
      const restaurantsData = await RestaurantSource.allRestaurants();
      if (restaurantsData.status) {
        this.restaurants = restaurantsData.output.restaurants;
        this.filtering();
      }
    }
  }

  filtering() {
    this.nearestRestaurants = this.restaurants
      .filter((restaurant) => restaurant.city === this.city);
    if (this.nearestRestaurants.length > 1) {
      this.renderRestaurants();
    }
  }

  renderRestaurants() {
    const { nearestRestaurants } = this;
    this.restaurantItem = '';
    nearestRestaurants.forEach((restaurant) => {
      if (this.restaurantNotSame(restaurant.id)) {
        this.restaurantItem += `
          <a href="/#/detail/${restaurant.id}" class="button restaurant-item" title="${restaurant.name}" aria-label="${restaurant.name}">
            <img src="images/placeholder.png" data-src="${CONFIG.SMALL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload" crossorigin="anonymous">
            <span class="rating"><i class="fas fa-star"></i>${restaurant.rating}</span>
            <span class="name">${restaurant.name}</span>
          </a>
        `;
      }
    });
    return this.renderAll();
  }

  restaurantNotSame(id) {
    return this.restaurantId !== id;
  }

  renderAll() {
    this.innerHTML = `
      <h3 data-lang="37"><i class="fas fa-store"></i>Nearest Restaurants</h3>
      <div class="restaurant-list">${this.restaurantItem}</div>
    `;
    Language.setGeneralLanguageByRange(37);
  }
}

export default NearestRestaurants;
