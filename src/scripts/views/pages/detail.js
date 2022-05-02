import DetailTemplate from '../templates/detail-template';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/api-source';
import { RestaurantIdb } from '../../data/idb-source';
import AddFavoritePresenter from '../../utils/add-favorite-presenter';
import AddReviewPresenter from '../../utils/add-review-presenter';
import DetailReviews from '../../components/main/detail-reviews';
import { Language } from '../../utils/preferences-presenter';

const Detail = {
  render(container) {
    DetailTemplate.result(container);
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantData = await RestaurantSource.detailRestaurant(url.id);

    this.mainContent = document.querySelector('main-content');

    if (restaurantData.status) {
      this.restaurant = restaurantData.output.restaurant;
      this.afterRenderSuccess();
    } else {
      this.afterRenderFailed(restaurantData.output);
    }
  },

  afterRenderSuccess() {
    this.showDetailContainer();
    this.initFeatures();
  },

  showDetailContainer() {
    const detailContainer = document.querySelector('detail-container');
    detailContainer.restaurantData = this.restaurant;
  },

  initFeatures() {
    const detailReviews = document.querySelector('detail-reviews');
    DetailReviews.showAllEvent(detailReviews, this.restaurant.consumerReviews);

    AddFavoritePresenter.init({
      restaurant: {
        id: this.restaurant.id,
        name: this.restaurant.name,
        city: this.restaurant.city,
        rating: this.restaurant.rating,
        description: this.restaurant.description,
        pictureId: this.restaurant.pictureId,
      },
      favoritesRestaurant: RestaurantIdb,
      buttonContainer: document.querySelector('.add-to-favorites'),
      toastContainer: document.querySelector('toast-container'),
    });

    AddReviewPresenter.init({
      restaurantId: this.restaurant.id,
      nameInput: document.querySelector('.add-review input'),
      reviewInput: document.querySelector('.add-review textarea'),
      button: document.querySelector('.add-review button'),
      reviewContainer: detailReviews,
      toastContainer: document.querySelector('toast-container'),
    });
  },

  afterRenderFailed(message = Language.getSpecificContent('something-wrong')) {
    const errorPageElement = document.createElement('error-page');
    errorPageElement.errorData = {
      iconClass: 'fas fa-sad-cry',
      title: Language.getSpecificContent('cannot-load-detail'),
      message,
    };
    this.mainContent.innerHTML = '';
    this.mainContent.appendChild(errorPageElement);
  },
};

export default Detail;
