import CONFIG from '../globals/config';
import NotificationHelper from './notification-helper';
import { Language } from './preferences-presenter';

const AddFavoritePresenter = {
  async init({
    restaurant, favoritesRestaurant, buttonContainer, toastContainer,
  }) {
    this.restaurant = restaurant;
    this.favoritesRestaurant = favoritesRestaurant;
    this.buttonContainer = buttonContainer;
    this.toastContainer = toastContainer;
    await this.renderButton();
  },

  async renderButton() {
    if (await this.isRestaurantExist()) {
      this.renderUnfavoriteButton();
    } else {
      this.renderFavoriteButton();
    }
  },

  async isRestaurantExist() {
    const restaurant = await this.favoritesRestaurant.getRestaurant(this.restaurant.id);
    return restaurant;
  },

  renderFavoriteButton() {
    this.buttonContainer.innerHTML = `
      <button title="Add to Favorites" aria-label="Add to Favorites" data-lang="26" data-favorites="favorite"><i class="far fa-heart fa-fw"></i></button>
    `;
    Language.setGeneralLanguageByRange(26);

    const button = document.querySelector('[data-favorites="favorite"]');
    button.addEventListener('click', async () => {
      await this.favoritesRestaurant.putRestaurant(this.restaurant, this.restaurant.id);
      this.showToastFavorited();
      this.showNotificationFavorited();
      this.renderUnfavoriteButton();
    });
  },

  renderUnfavoriteButton() {
    this.buttonContainer.innerHTML = `
      <button title="Delete from Favorites" aria-label="Delete from Favorites" data-lang="27" data-favorites="unfavorite"><i class="fas fa-heart fa-fw"></i></button>
    `;
    Language.setGeneralLanguageByRange(27);

    const button = document.querySelector('[data-favorites="unfavorite"]');
    button.addEventListener('click', async () => {
      await this.favoritesRestaurant.deleteRestaurant(this.restaurant.id);
      this.showToastUnfavorited();
      this.showNotificationUnfavorited();
      this.renderFavoriteButton();
    });
  },

  showToastFavorited() {
    this.toastContainer.show = {
      type: 'default',
      iconClass: 'fas fa-check',
      content: Language.getSpecificContent('restaurant-added'),
    };
  },

  showToastUnfavorited() {
    this.toastContainer.show = {
      type: 'default',
      iconClass: 'fas fa-trash',
      content: Language.getSpecificContent('restaurant-deleted'),
    };
  },

  showNotificationFavorited() {
    const body = `${this.restaurant.name + Language.getSpecificContent('restaurant-has-added')}`;
    this.showNotification(body);
  },

  showNotificationUnfavorited() {
    const body = `${this.restaurant.name + Language.getSpecificContent('restaurant-has-deleted')}`;
    this.showNotification(body);
  },

  showNotification(body) {
    const { restaurant } = this;
    const title = Language.getSpecificContent('favorites-restaurant');
    const options = {
      body,
      image: `${CONFIG.SMALL_IMAGE + restaurant.pictureId}`,
      tag: 'favorites',
      silent: true,
    };
    NotificationHelper.show(title, options);
  },
};

export default AddFavoritePresenter;
