class DetailInfo extends HTMLElement {
  set restaurantData(restaurant) {
    this.restaurant = restaurant;
    this.renderCategories();
    this.renderAll();
  }

  renderCategories() {
    const { restaurant } = this;
    this.categories = '';
    restaurant.categories.forEach((category) => {
      this.categories += `<li>${category.name}</li>`;
    });
  }

  renderAll() {
    const { restaurant, categories } = this;
    this.innerHTML = `
      <div class="detail-data">
        <div class="detail-rating"><i class="fas fa-star"></i>${restaurant.rating}</div>
        <div class="detail-city"><i class="fas fa-map-marker-alt"></i>${restaurant.city}</div>
      </div>
      <h2>${restaurant.name}</h2>
      <div class="detail-categories">
        <i class="fas fa-tags"></i>
        <ul>${categories}</ul>
      </div>
      <p class="detail-address">${restaurant.address}</p>
      <p class="detail-description">${restaurant.description}</p>
    `;
  }
}

export default DetailInfo;
