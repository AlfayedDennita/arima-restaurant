import CONFIG from '../../globals/config';

class DetailImage extends HTMLElement {
  set restaurantData(restaurant) {
    this.restaurant = restaurant;
    this.render();
  }

  render() {
    const { restaurant } = this;
    this.innerHTML += `
      <picture>
        <source media="(min-width: 576px)" srcset="images/placeholder.png" data-srcset="${CONFIG.MEDIUM_IMAGE + restaurant.pictureId}">
        <img src="images/placeholder.png" data-src="${CONFIG.SMALL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" class="lazyload" crossorigin="anonymous">
      </picture>
      <div class="add-to-favorites"></div>
    `;
  }
}

export default DetailImage;
