import CONFIG from '../../globals/config';

class BestItem extends HTMLElement {
  set restaurantData(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    const { restaurant } = this;
    this.innerHTML = `
      <a href="/#/detail/${restaurant.id}" class="button" title="${restaurant.name}" aria-label="${restaurant.name}">
        <h3>${restaurant.name}</h3>
        <div class="best-info">
          <div class="best-rating">
            <i class="fas fa-star"></i>
            <span>${restaurant.rating}</span>
          </div>
          <div class="best-city">
            <i class="fas fa-map-marker-alt"></i>
            <span>${restaurant.city}</span>
          </div>
        </div>
        <img src="images/placeholder.png" data-src="${CONFIG.SMALL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload" crossorigin="anonymous">
      </a>
    `;
  }
}

export default BestItem;
