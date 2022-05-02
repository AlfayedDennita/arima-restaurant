import RestaurantSource from '../data/api-source';
import DetailReviews from '../components/main/detail-reviews';
import { Language } from './preferences-presenter';

const AddReviewPresenter = {
  init({
    restaurantId, nameInput, reviewInput, button, reviewContainer, toastContainer,
  }) {
    this.restaurantId = restaurantId;
    this.nameInput = nameInput;
    this.reviewInput = reviewInput;
    this.button = button;
    this.reviewContainer = reviewContainer;
    this.toastContainer = toastContainer;

    button.addEventListener('click', () => this.addReviewFromButton());
  },

  async addReview({ id, name, review }) {
    const result = await RestaurantSource.addReview({ id, name, review });
    return result;
  },

  async addReviewFromButton() {
    const id = this.restaurantId;
    const name = this.nameInput.value;
    const review = this.reviewInput.value;
    if (this.isFormNotFilled()) {
      this.showToastError(Language.getSpecificContent('form-must-filled'));
    } else {
      const result = await this.addReview({ id, name, review });
      if (result.status) {
        this.addReviewSuccess(result.output.customerReviews);
      } else {
        this.showToastFailed(result.output);
      }
    }
  },

  isFormNotFilled() {
    return this.nameInput.value === '' || this.reviewInput.value === '';
  },

  addReviewSuccess(customerReviews) {
    this.refreshReviews(customerReviews);
    this.resetForm();
    this.showToastSuccess();
  },

  refreshReviews(customerReviews) {
    this.reviewContainer.showHalf = customerReviews;
    this.afterRefreshReviews(customerReviews);
  },

  afterRefreshReviews(customerReviews) {
    const detailReviews = document.querySelector('detail-reviews');
    DetailReviews.showAllEvent(detailReviews, customerReviews);
  },

  resetForm() {
    this.nameInput.value = '';
    this.reviewInput.value = '';
  },

  showToastSuccess() {
    this.toastContainer.show = {
      type: 'default',
      iconClass: 'fas fa-check',
      content: Language.getSpecificContent('add-review-success'),
    };
  },

  showToastFailed(message = Language.getSpecificContent('add-review-failed')) {
    this.toastContainer.show = {
      type: 'warning',
      iconClass: 'fas fa-times-circle',
      content: message,
    };
  },

  showToastError(message) {
    this.toastContainer.show = {
      type: 'warning',
      iconClass: 'fas fa-exclamation-circle',
      content: message,
    };
  },
};

export default AddReviewPresenter;
