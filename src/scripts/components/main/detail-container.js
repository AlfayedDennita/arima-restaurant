import { Language } from '../../utils/preferences-presenter';

class DetailContainer extends HTMLElement {
  set skeleton(totalSkeleton) {
    this.totalSkeleton = totalSkeleton;
    this.innerHTML = '';
    this.renderSkeleton(totalSkeleton);
  }

  set restaurantData(restaurant) {
    this.restaurant = restaurant;
    this.innerHTML = '';
    this.renderDetail();
  }

  renderSkeleton() {
    for (let i = 0; i < this.totalSkeleton; i += 1) {
      this.innerHTML += '<div class="skeleton"></div>';
    }
  }

  renderDetail() {
    const detailImageElement = document.createElement('detail-image');
    const detailInfoElement = document.createElement('detail-info');
    const detailMenuElement = document.createElement('detail-menu');
    const detailReviewsElement = document.createElement('detail-reviews');
    detailImageElement.restaurantData = this.restaurant;
    detailInfoElement.restaurantData = this.restaurant;
    detailMenuElement.restaurantData = this.restaurant.menus;
    detailReviewsElement.showHalf = this.restaurant.consumerReviews;
    this.appendChild(detailImageElement);
    this.appendChild(detailInfoElement);
    this.appendChild(detailMenuElement);
    this.appendChild(detailReviewsElement);
    this.innerHTML += this.constructor.addReviewTemplate();
    const nearestRestaurantsElement = document.createElement('nearest-restaurants');
    nearestRestaurantsElement.restaurantData = this.restaurant;
    this.appendChild(nearestRestaurantsElement);
  }

  static addReviewTemplate() {
    return `
      <form class="add-review">
        <h3 data-lang="32"><i class="fas fa-comment-dots"></i>Add New Review</h3>
        <div class="name-review">
          <input type="text" placeholder="${Language.getSpecificContent('review-name-placeholder')}" id="name">
          <label for="name" data-lang="33"><i class="fas fa-exclamation-circle"></i>Type Your Name</label>
        </div>
        <div class="content-review">
          <textarea placeholder="${Language.getSpecificContent('review-content-placeholder')}" aria-label="Review" id="review" data-lang="34"></textarea>
          <label for="review" data-lang="35"><i class="fas fa-exclamation-circle"></i>Type Your Review</label>
        </div>
        <button type="button" title="Add Review" data-lang="36">Add Review</button>
      </form>
    `;
  }
}

export default DetailContainer;
