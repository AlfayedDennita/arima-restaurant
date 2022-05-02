class DetailMenu extends HTMLElement {
  set restaurantData(menus) {
    this.menus = menus;
    this.renderFoods();
    this.renderDrinks();
    this.renderAll();
  }

  renderFoods() {
    const { menus } = this;
    this.foods = '';
    menus.foods.forEach((food) => {
      this.foods += `<li>${food.name}</li>`;
    });
  }

  renderDrinks() {
    const { menus } = this;
    this.drinks = '';
    menus.drinks.forEach((drink) => {
      this.drinks += `<li>${drink.name}</li>`;
    });
  }

  renderAll() {
    const { foods, drinks } = this;
    this.innerHTML = `
      <div class="detail-foods">
        <h3 data-lang="28"><i class="fas fa-hamburger"></i>Foods Menu</h3>
        <ul>${foods}</ul>
      </div>
      <div class="detail-drinks">
        <h3 data-lang="29"><i class="fas fa-glass-cheers"></i>Drinks Menu</h3>
        <ul>${drinks}</ul>
      </div>
    `;
  }
}

export default DetailMenu;
