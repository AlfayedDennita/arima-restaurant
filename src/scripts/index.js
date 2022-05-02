import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/bundle.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import handleAccesibility from './utils/accessibility';
import iconsInit from './utils/icons-init';

document.addEventListener('DOMContentLoaded', () => {
  const headerComponents = {
    underBreakpoint: window.matchMedia('(max-width: 991px)'),
    upperBreakpoint: window.matchMedia('(min-width: 992px)'),
    skipToContentButton: document.querySelector('#skip-to-content'),
    header: document.querySelector('header'),
    nav: document.querySelector('nav'),
    hamburgerMenu: document.querySelector('.hamburger-menu'),
    menuListItem: document.querySelectorAll('.menu-item a'),
    dropDownType: ['theme', 'language'],
  };

  const mainComponents = {
    container: document.querySelector('main'),
  };

  const footerComponents = {
    container: document.querySelector('footer'),
  };

  const themeComponents = {
    buttons: document.querySelectorAll('.float-setting [data-color]'),
    displayIcon: document.querySelector('.theme-setting > button .color-icon'),
  };

  const languageComponents = {
    buttons: document.querySelectorAll('.float-setting [data-language]'),
    displayButton: document.querySelector('.language-setting > button'),
    activeFloatButton: document.querySelector('.language-setting > .float-setting .active'),
  };

  const app = new App({
    header: headerComponents,
    main: mainComponents,
    footer: footerComponents,
    theme: themeComponents,
    language: languageComponents,
  });

  window.addEventListener('load', async () => {
    document.documentElement.scrollTop = 0;
    await app.renderPage();
    await swRegister();
  });
  window.addEventListener('hashchange', async () => {
    document.documentElement.scrollTop = 0;
    await app.renderPage();
  });
  window.addEventListener('keydown', handleAccesibility);

  iconsInit();
});
