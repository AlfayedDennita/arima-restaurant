import { Language } from '../../utils/preferences-presenter';

class RestaurantsContainer extends HTMLElement {
  set heading(data) {
    this.data = data;
    this.innerHTML = this.headingTemplate();
  }

  headingTemplate() {
    const { data } = this;
    return `
      <h2>${data.title}</h2>
    `;
  }

  static skeletonTemplate() {
    return '<div class="skeleton"></div>';
  }

  static searchTemplate() {
    return `
      <div class="search-restaurant">
        <div class="search-name">
          <i class="fas fa-search fa-fw"></i>       
          <input type="text" id="search-name" placeholder="${Language.getSpecificContent('search-name-placeholder')}">
          <label for="search-name" data-lang="19"><i class="fas fa-exclamation-circle"></i>Search Restaurant by Name</label>
        </div>
        <button class="search-city" title="Search Restaurant by City" aria-label="Search Restaurant by City" data-lang="20">
          <i class="fas fa-map-marker-alt fa-fw"></i><span data-lang="21">Search by city</span><i class="fas fa-angle-down fa-fw"></i></span>
        </button>
        <ul class="city-list"></ul>
      </div>        
      <p class="notice"></p>
    `;
  }
}

export default RestaurantsContainer;
