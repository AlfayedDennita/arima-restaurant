const BestRatingPresenter = {
  init({ restaurants, container, bestList }) {
    this.restaurants = restaurants;
    this.container = container;
    this.bestList = bestList;
    this.renderBestItem();
  },

  renderBestItem() {
    const { restaurants } = this;
    const restaurantsRating = restaurants.map((restaurant) => restaurant.rating);
    const highestRating = Math.max.apply(null, restaurantsRating);
    this.bestRestaurants = restaurants.filter((restaurant) => restaurant.rating === highestRating);
    if (this.bestList) {
      this.bestList.restaurantsData = this.bestRestaurants;
    } else {
      this.renderBestList();
    }
  },

  renderBestList() {
    const bestListElement = document.createElement('best-list');
    bestListElement.restaurantsData = this.bestRestaurants;
    this.container.appendChild(bestListElement);
  },
};

export default BestRatingPresenter;
