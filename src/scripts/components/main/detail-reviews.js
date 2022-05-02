class DetailReviews extends HTMLElement {
  set showHalf(reviews) {
    this.reviews = reviews.reverse();
    this.maxReviews = 3;
    this.innerHTML = '';
    if (this.isReviewsExist()) {
      if (this.isReviewsMoreThanMax()) {
        this.renderHalf();
      } else {
        this.renderAll();
      }
    } else {
      this.renderEmpty();
    }
  }

  set showAll(reviews) {
    this.reviews = reviews;
    this.innerHTML = '';
    if (this.isReviewsExist()) {
      this.renderAll();
    } else {
      this.renderEmpty();
    }
  }

  isReviewsExist() {
    return this.reviews.length > 0;
  }

  isReviewsMoreThanMax() {
    return this.reviews.length > this.maxReviews;
  }

  renderEmpty() {
    this.innerHTML = this.constructor.headerTemplate();
    this.innerHTML += '<p class="empty" data-lang="39">There are no reviews yet</p>';
  }

  renderHalf() {
    this.innerHTML = this.constructor.headerTemplate();
    for (let i = 0; i < this.maxReviews; i += 1) {
      this.innerHTML += this.constructor.reviewsTemplate(this.reviews[i]);
    }
    this.renderShowAllButton();
  }

  renderAll() {
    this.innerHTML = this.constructor.headerTemplate();
    this.reviews.forEach((review) => {
      this.innerHTML += this.constructor.reviewsTemplate(review);
    });
  }

  renderShowAllButton() {
    this.innerHTML += `
      <button class="show-all" title="Show All Reviews" aria-label="Show All Reviews" data-lang="30">Show All</button>
    `;
  }

  static headerTemplate() {
    return `
      <h3 data-lang="31"><i class="fas fa-comments"></i>Consumer Reviews</h3>
    `;
  }

  static reviewsTemplate(review) {
    return `
      <div class="review-item">
        <div class="header-review">
          <span class="name">${review.name}</span>
          <span class="date">${review.date}</span>
        </div>
        <div class="content-review">
          ${review.review}
        </div>
      </div>
    `;
  }

  static showAllEvent(detailReviews, reviews) {
    const detailReviewsElement = detailReviews;
    const showAllButton = document.querySelector('.show-all');
    if (showAllButton) {
      showAllButton.addEventListener('click', () => {
        detailReviewsElement.showAll = reviews;
      });
    }
  }
}

export default DetailReviews;
