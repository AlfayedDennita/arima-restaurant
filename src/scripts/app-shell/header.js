import CreditInfo from '../components/header/credit-info';
import BrandLogo from '../components/header/brand-logo';
import { Language } from '../utils/preferences-presenter';

const Header = {
  init({
    underBreakpoint, upperBreakpoint, skipToContentButton, header, nav, hamburgerMenu,
    menuListItem, dropDownType,
  }) {
    this.underBreakpoint = underBreakpoint;
    this.upperBreakpoint = upperBreakpoint;
    this.skipToContentButton = skipToContentButton;
    this.header = header;
    this.nav = nav;
    this.hamburgerMenu = hamburgerMenu;
    this.menuListItem = menuListItem;
    this.dropDownType = dropDownType;
    this.defineCustomElements();
    this.initialCustomElements();
    this.changeNavTypeInVariousDevice();
    this.hoverEffectMenuItem();
    this.hamburgerMenuEvent();
    this.dropDownConfig();
  },

  defineCustomElements() {
    customElements.define('credit-info', CreditInfo);
    customElements.define('brand-logo', BrandLogo);
  },

  initialCustomElements() {
    const creditInfoElement = document.createElement('credit-info');
    this.nav.appendChild(creditInfoElement);
    creditInfoElement.innerHTML += '<p data-lang="13">Copyright &copy; 2020</p>';
  },

  arrowStyleSkipButtonInit() {
    const { skipToContentButton } = this;
    skipToContentButton.innerHTML = '<i class="fas fa-chevron-down fa-fw"></i>';
    skipToContentButton.classList.add('arrow');
    skipToContentButton.classList.remove('regular');
  },

  regularStyleSkipButtonInit() {
    const { skipToContentButton } = this;
    skipToContentButton.innerHTML = Language.getSpecificContent('skip-to-content');
    skipToContentButton.classList.add('regular');
    skipToContentButton.classList.remove('arrow');
  },

  skipToContentEvent(target) {
    target.setAttribute('tabindex', '-1');
    this.skipToContentButton.addEventListener('click', () => target.focus());
  },

  changeNavTypeInVariousDevice() {
    const navConfig = () => {
      const { body } = document;
      if (this.upperBreakpoint.matches) {
        if (body.classList.contains('mobile-menu-active')) this.removeOffCanvasMenu();
        this.nav.classList.add('desktop');
        this.nav.classList.remove('mobile');
      } else {
        this.nav.classList.add('mobile');
        this.nav.classList.remove('desktop');
      }
    };
    navConfig();
    this.upperBreakpoint.addListener(navConfig);
  },

  dynamicHeaderBackground() {
    window.addEventListener('scroll', this.dynamicHeaderEvent);
    this.dynamicHeaderEvent();
  },

  staticHeaderBackground() {
    window.removeEventListener('scroll', this.dynamicHeaderEvent);
    this.staticHeaderEvent();
  },

  dynamicHeaderEvent() {
    const topPoint = document.documentElement.scrollTop;
    const header = document.querySelector('header');
    if (topPoint > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  },

  staticHeaderEvent() {
    this.header.classList.add('active');
  },

  hoverEffectMenuItem() {
    this.menuListItem.forEach((button) => {
      button.addEventListener('mouseover', () => {
        button.classList.remove('before');
        button.classList.add('active');
      });
      button.addEventListener('mouseout', () => {
        button.classList.remove('active');
        button.classList.add('after');
        const hoverTransitionInMs = 300;
        setTimeout(() => {
          button.classList.remove('after');
          button.classList.add('before');
        }, hoverTransitionInMs);
      });
    });
  },

  hamburgerMenuEvent() {
    const { hamburgerMenu } = this;
    hamburgerMenu.addEventListener('click', () => {
      this.toggleOffCanvasMenu();
      if (hamburgerMenu.classList.contains('close')) {
        hamburgerMenu.setAttribute('tabindex', '1');
      } else {
        hamburgerMenu.removeAttribute('tabindex');
      }
    });
  },

  removeOffCanvasMenu() {
    this.hamburgerMenu.classList.remove('close');
    this.nav.classList.remove('active');
    document.body.classList.remove('mobile-menu-active');
  },

  toggleOffCanvasMenu() {
    this.hamburgerMenu.classList.toggle('close');
    this.nav.classList.toggle('active');
    document.body.classList.toggle('mobile-menu-active');
  },

  dropDownConfig() {
    this.dropDownType.forEach((type) => {
      this.displayButtonConfig(type);
      this.floatButtonsConfig(type);
    });
  },

  displayButtonConfig(type) {
    const displayButton = document.querySelector(`.${type}-setting > button`);
    displayButton.addEventListener('click', () => {
      if (this.underBreakpoint.matches) this.floatMenuRemove(type);
      this.dropDownToggle(type);
    });
  },

  floatButtonsConfig(type) {
    const floatButtons = document.querySelectorAll(`.${type}-setting .float-setting button`);
    floatButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (this.underBreakpoint.matches) this.toggleOffCanvasMenu();
        this.dropDownToggle(type);
      });
    });
  },

  floatMenuRemove(type) {
    const floatMenuToRemove = this.dropDownType.filter((floatMenu) => floatMenu !== type);
    this.dropDownRemove(floatMenuToRemove);
  },

  dropDownRemove(type) {
    const arrowIcon = document.querySelector(`.${type}-setting > button svg`);
    const floatMenu = document.querySelector(`.${type}-setting .float-setting`);
    arrowIcon.classList.remove('fa-rotate-180');
    floatMenu.classList.remove('show');
  },

  dropDownToggle(type) {
    const arrowIcon = document.querySelector(`.${type}-setting > button svg`);
    const floatMenu = document.querySelector(`.${type}-setting .float-setting`);
    arrowIcon.classList.toggle('fa-rotate-180');
    floatMenu.classList.toggle('show');
  },
};

export default Header;
