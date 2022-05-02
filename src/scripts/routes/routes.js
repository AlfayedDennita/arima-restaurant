import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';
import Error from '../views/pages/error';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorites': Favorites,
  '/error': Error,
};

export default routes;
