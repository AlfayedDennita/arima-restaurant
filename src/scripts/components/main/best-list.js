class BestList extends HTMLElement {
  set skeleton(totalSkeleton) {
    this.totalSkeleton = totalSkeleton;
    this.innerHTML = '';
    this.renderSkeleton();
  }

  set restaurantsData(restaurants) {
    this.restaurants = restaurants;
    this.innerHTML = '';
    this.renderBestItem();
  }

  renderSkeleton() {
    for (let i = 0; i < this.totalSkeleton; i += 1) {
      this.innerHTML += this.constructor.skeletonTemplate();
    }
  }

  static skeletonTemplate() {
    return `
      <best-item>
        <div class="skeleton"></div>
      </best-item>
    `;
  }

  renderBestItem() {
    this.restaurants.forEach((restaurant) => {
      const bestItemElement = document.createElement('best-item');
      bestItemElement.restaurantData = restaurant;
      this.appendChild(bestItemElement);
    });
  }
}

export default BestList;
