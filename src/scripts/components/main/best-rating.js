class BestRating extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h2 data-lang="18">Best Rating Restaurants</h2>
    `;
  }
}

export default BestRating;
