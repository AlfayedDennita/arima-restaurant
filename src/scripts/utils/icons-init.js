import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons/faStar';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons/faHeart';

import { faUtensils as fasUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { faAngleDown as fasAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faChevronDown as fasChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faTags as fasTags } from '@fortawesome/free-solid-svg-icons/faTags';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faStore as fasStore } from '@fortawesome/free-solid-svg-icons/faStore';
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faStarHalfAlt as fasStarHalfAlt } from '@fortawesome/free-solid-svg-icons/faStarHalfAlt';
import { faMapMarkerAlt as fasMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faComments as fasComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faCommentDots as fasCommentDots } from '@fortawesome/free-solid-svg-icons/faCommentDots';
import { faHamburger as fasHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger';
import { faGlassCheers as fasGlassCheers } from '@fortawesome/free-solid-svg-icons/faGlassCheers';
import { faTimesCircle as fasTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faCheck as fasCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faTrash as fasTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faSadCry as fasSadCry } from '@fortawesome/free-solid-svg-icons/faSadCry';
import { faBoxOpen as fasBoxOpen } from '@fortawesome/free-solid-svg-icons/faBoxOpen';
import { faExclamation as fasExclamation } from '@fortawesome/free-solid-svg-icons/faExclamation';
import { faExclamationCircle as fasExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { faExclamationTriangle as fasExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

import { faGithubSquare as fabGithubSquare } from '@fortawesome/free-brands-svg-icons/faGithubSquare';
import { faFacebookSquare as fabFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagram as fabInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faPinterestSquare as fabPinterestSquare } from '@fortawesome/free-brands-svg-icons/faPinterestSquare';

const iconsInit = () => {
  library.add(
    farStar,
    farHeart,

    fasUtensils,
    fasAngleDown,
    fasChevronDown,
    fasTags,
    fasHeart,
    fasStore,
    fasSearch,
    fasStar,
    fasStarHalfAlt,
    fasMapMarkerAlt,
    fasComments,
    fasCommentDots,
    fasHamburger,
    fasGlassCheers,
    fasTimesCircle,
    fasCheck,
    fasTrash,
    fasSadCry,
    fasBoxOpen,
    fasExclamation,
    fasExclamationCircle,
    fasExclamationTriangle,

    fabGithubSquare,
    fabFacebookSquare,
    fabInstagram,
    fabPinterestSquare,
  );
  dom.watch();
};

export default iconsInit;
