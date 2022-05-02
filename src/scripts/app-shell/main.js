import FullJumbotron from '../components/main/full-jumbotron';
import MainContent from '../components/main/main-content';
import BestRating from '../components/main/best-rating';
import BestList from '../components/main/best-list';
import BestItem from '../components/main/best-item';
import RestaurantsContainer from '../components/main/restaurants-container';
import RestaurantList from '../components/main/restaurant-list';
import DetailContainer from '../components/main/detail-container';
import DetailImage from '../components/main/detail-image';
import DetailInfo from '../components/main/detail-info';
import DetailMenu from '../components/main/detail-menu';
import DetailReviews from '../components/main/detail-reviews';
import NearestRestaurants from '../components/main/nearest-restaurants';

const Main = {
  init() {
    this.defineCustomElements();
  },

  defineCustomElements() {
    customElements.define('full-jumbotron', FullJumbotron);
    customElements.define('main-content', MainContent);
    customElements.define('best-rating', BestRating);
    customElements.define('best-list', BestList);
    customElements.define('best-item', BestItem);
    customElements.define('restaurants-container', RestaurantsContainer);
    customElements.define('restaurant-list', RestaurantList);
    customElements.define('detail-container', DetailContainer);
    customElements.define('detail-image', DetailImage);
    customElements.define('detail-info', DetailInfo);
    customElements.define('detail-menu', DetailMenu);
    customElements.define('detail-reviews', DetailReviews);
    customElements.define('nearest-restaurants', NearestRestaurants);
  },
};

export default Main;
