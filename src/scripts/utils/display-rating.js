const displayStarRating = (rating) => {
  let containerRating = '';
  const fullRating = Math.trunc(rating);
  const halfRating = rating % 1;

  for (let i = 0; i < fullRating; i += 1) {
    containerRating += '<i class="fas fa-star"></i>';
  }

  if (halfRating > 0) {
    containerRating += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < (5 - fullRating - 1); i += 1) {
      containerRating += '<i class="far fa-star"></i>';
    }
  } else {
    for (let i = 0; i < (5 - fullRating); i += 1) {
      containerRating += '<i class="far fa-star"></i>';
    }
  }

  return containerRating;
};

export default displayStarRating;
