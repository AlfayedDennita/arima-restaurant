import CONFIG from '../../globals/config';
import displayStarRating from '../../utils/display-rating';

class RestaurantList extends HTMLElement {
  set skeleton(totalSkeleton) {
    this.totalSkeleton = totalSkeleton;
    this.innerHTML = '';
    this.renderSkeleton();
  }

  set showHalf(restaurants) {
    this.restaurants = restaurants;
    this.maxRestaurants = 12;
    this.innerHTML = '';
    if (this.isRestaurantsMoreThanMax()) {
      this.renderHalf();
    } else {
      this.renderAll();
    }
  }

  set showAll(restaurants) {
    this.restaurants = restaurants;
    this.innerHTML = '';
    this.renderAll();
  }

  isRestaurantsMoreThanMax() {
    return this.restaurants.length > this.maxRestaurants;
  }

  renderSkeleton() {
    for (let i = 0; i < this.totalSkeleton; i += 1) {
      this.innerHTML += '<div class="skeleton"></div>';
    }
  }

  renderHalf() {
    for (let i = 0; i < this.maxRestaurants; i += 1) {
      this.innerHTML += this.constructor.template(this.restaurants[i]);
    }
    this.renderShowAllButton();
  }

  renderAll() {
    this.restaurants.forEach((restaurant) => {
      this.innerHTML += this.constructor.template(restaurant);
    });
  }

  renderShowAllButton() {
    this.innerHTML += `
      <button class="show-all" title="Show All Restaurant" aria-label="Show All Restaurant" data-lang="22">Show All</button>
    `;
  }

  static template(restaurant) {
    return `
      <a href="/#/detail/${restaurant.id}" class="button restaurant-item" title="${restaurant.name}" aria-label="${restaurant.name}">
        <div class="restaurant-image">
          <img src="images/placeholder.png" data-src="${CONFIG.SMALL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload" crossorigin="anonymous">
          <span><i class="fas fa-map-marker-alt fa-fw"></i>${restaurant.city}</span>  
        </div>
        <div class="restaurant-info">
          <div class="restaurant-rating">
            ${displayStarRating(restaurant.rating)}
            <span>${restaurant.rating}</span>
          </div>                      
          <h3>${restaurant.name}</h3>
          <p>${restaurant.description}</p>
        </div>
      </a>
    `;
  }

  static showAllEvent(restaurantList, restaurants) {
    const restaurantListElement = restaurantList;
    const showAllButton = document.querySelector('.show-all');
    if (showAllButton) {
      showAllButton.addEventListener('click', () => {
        restaurantListElement.showAll = restaurants;
      });
    }
  }
}

export default RestaurantList;
