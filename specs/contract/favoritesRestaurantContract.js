/* eslint-disable no-undef */

const isActsAsFavoritesRestaurantModel = (favoritesRestaurant) => {
  it('should return restaurant that has been added', async () => {
    await favoritesRestaurant.putRestaurant({ id: 1 }, 1);
    await favoritesRestaurant.putRestaurant({ id: 2 }, 2);

    expect(await favoritesRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoritesRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoritesRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoritesRestaurant.putRestaurant({ invalidProperty: 'property' }, 'property');

    expect(await favoritesRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoritesRestaurant.putRestaurant({ id: 1 }, 1);
    favoritesRestaurant.putRestaurant({ id: 2 }, 2);

    expect(await favoritesRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoritesRestaurant.putRestaurant({ id: 1 }, 1);
    favoritesRestaurant.putRestaurant({ id: 2 }, 2);
    favoritesRestaurant.putRestaurant({ id: 3 }, 3);

    await favoritesRestaurant.deleteRestaurant(2);

    expect(await favoritesRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoritesRestaurant.putRestaurant({ id: 1 }, 1);
    favoritesRestaurant.putRestaurant({ id: 2 }, 2);
    favoritesRestaurant.putRestaurant({ id: 3 }, 3);

    await favoritesRestaurant.deleteRestaurant(4);

    expect(await favoritesRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export default isActsAsFavoritesRestaurantModel;
