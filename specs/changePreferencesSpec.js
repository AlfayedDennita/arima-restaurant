/* eslint-disable no-undef */

import * as TestFactories from './helpers/testFactories';
import { PreferenceIdb } from '../src/scripts/data/idb-source';
import { Theme, Language } from '../src/scripts/utils/preferences-presenter';

const initChangeThemeRequirements = () => {
  document.body.innerHTML = `
    <li class="theme-setting">
      <button>
        <i class="color-icon orange"></i><span>Color Themes</span><i class="fas fa-angle-down fa-fw"></i>
      </button>
      <ul class="float-setting">
        <li><button class="active" data-color="orange"><i class="color-icon"></i>Orange</button></li>
        <li><button data-color="green"><i class="color-icon"></i>Green</button></li>
      </ul>
    </li>
  `;
};

const createChangeThemePresenter = async () => {
  await Theme.init({
    buttons: document.querySelectorAll('.float-setting [data-color]'),
    displayIcon: document.querySelector('.theme-setting > button .color-icon'),
  });
};

const initChangeLanguageRequirements = () => {
  document.body.innerHTML = `
    <li class="language-setting">
      <button>
        <img data-src="images/flags/en.svg" alt="USA">EN<i class="fas fa-angle-down fa-fw"></i>
      </button>
      <ul class="float-setting">
        <li><button class="active" data-language="en"><img data-src="images/flags/en.svg" alt="USA">EN</button></li>
        <li><button data-language="id"><img data-src="images/flags/id.svg" alt="Indonesia">ID</button></li>
      </ul>
    </li>
  `;
};

const createChangeLanguagePresenter = async () => {
  await Language.init({
    buttons: document.querySelectorAll('.float-setting [data-language]'),
    displayButton: document.querySelector('.language-setting > button'),
    activeFloatButton: document.querySelector('.language-setting > .float-setting .active'),
  });
};

describe('Change preference', () => {
  beforeAll(() => {
    TestFactories.initLanguage();
  });

  describe('theme', () => {
    const checkColorInIdb = async (color) => {
      const themeInIdb = await PreferenceIdb.getPreference('theme');
      const themeColorInIdb = themeInIdb.content;
      expect(themeColorInIdb).toEqual(color);
    };

    const checkColorInBody = (color) => {
      const dataTheme = document.body.getAttribute('data-theme');
      expect(dataTheme).toEqual(color);
    };

    beforeEach(() => {
      initChangeThemeRequirements();
    });

    afterEach(async () => {
      await PreferenceIdb.deletePreference('theme');
    });

    it('should first time save theme with orange', async () => {
      await createChangeThemePresenter();

      await checkColorInIdb('orange');
      checkColorInBody('orange');
    });

    it('should not first time save if theme has been set', async () => {
      await PreferenceIdb.putPreference({ type: 'theme', content: 'green' }, 'theme');

      await createChangeThemePresenter();

      await checkColorInIdb('green');
      checkColorInBody('green');
    });

    it('should not save theme if color not available', async () => {
      await PreferenceIdb.putPreference({ type: 'theme', content: 'cyan' }, 'theme');
      document.body.setAttribute('data-theme', 'cyan');

      await createChangeThemePresenter();

      await checkColorInIdb('orange');
      checkColorInBody('orange');
    });

    it('should color in idb and body same', async () => {
      await createChangeThemePresenter();

      const themeInIdb = await PreferenceIdb.getPreference('theme');
      const themeColorInIdb = themeInIdb.content;
      checkColorInBody(themeColorInIdb);
    });

    it('should be able to change theme when click change theme button', async () => {
      await createChangeThemePresenter();

      const button = document.querySelectorAll('.float-setting [data-color]')[1];
      const colorInButton = button.getAttribute('data-color');
      button.dispatchEvent(new Event('click'));

      await checkColorInIdb(colorInButton);
      checkColorInBody(colorInButton);
    });

    it('should "display icon" same with color theme', async () => {
      await createChangeThemePresenter();

      const button = document.querySelectorAll('.float-setting [data-color]')[1];
      const colorInButton = button.getAttribute('data-color');
      button.dispatchEvent(new Event('click'));

      const displayIcon = document.querySelector('.theme-setting > button .color-icon');
      expect(displayIcon).toHaveClass(colorInButton);
    });

    it('should active float button same with color theme', async () => {
      await createChangeThemePresenter();

      const button = document.querySelectorAll('.float-setting [data-color]')[1];
      const colorInButton = button.getAttribute('data-color');
      button.dispatchEvent(new Event('click'));

      const activeFloatButton = document.querySelector(`.theme-setting > .float-setting [data-color="${colorInButton}"]`);
      expect(activeFloatButton).toHaveClass('active');
    });
  });

  describe('language', () => {
    const checkLanguageInIdb = async (language) => {
      const languageInIdb = await PreferenceIdb.getPreference('language');
      const languageContentInIdb = languageInIdb.content;
      expect(languageContentInIdb).toEqual(language);
    };

    const checkLanguageInRoot = (language) => {
      const { lang } = document.documentElement;
      expect(lang).toEqual(language);
    };

    beforeEach(() => {
      initChangeLanguageRequirements();
    });

    afterEach(async () => {
      await PreferenceIdb.deletePreference('language');
    });

    it('should first time save language with English', async () => {
      await createChangeLanguagePresenter();

      await checkLanguageInIdb('en');
      checkLanguageInRoot('en');
    });

    it('should not first time save if language has been set', async () => {
      await PreferenceIdb.putPreference({ type: 'language', content: 'id' }, 'language');

      await createChangeLanguagePresenter();

      await checkLanguageInIdb('id');
      checkLanguageInRoot('id');
    });

    it('should not save language if language not available', async () => {
      await PreferenceIdb.putPreference({ type: 'language', content: 'ja' }, 'language');
      const rootElement = document.documentElement;
      rootElement.setAttribute('lang', 'ja');

      await createChangeLanguagePresenter();

      await checkLanguageInIdb('en');
      checkLanguageInRoot('en');
    });

    it('should language in idb and root same', async () => {
      await createChangeLanguagePresenter();

      const languageInIdb = await PreferenceIdb.getPreference('language');
      const languageContentInIdb = languageInIdb.content;
      checkLanguageInRoot(languageContentInIdb);
    });

    it('should be able to change language when click change language button', async () => {
      await createChangeLanguagePresenter();

      const button = document.querySelectorAll('.float-setting [data-language]')[1];
      const languageInButton = button.getAttribute('data-language');
      await Language.changeFromButton(button);

      checkLanguageInIdb(languageInButton);
      checkLanguageInRoot(languageInButton);
    });

    it('should "display button" same with language', async () => {
      await createChangeLanguagePresenter();

      const button = document.querySelectorAll('.float-setting [data-language]')[1];
      const languageInButton = button.getAttribute('data-language');
      await Language.changeFromButton(button);

      Language.setLanguage();

      const displayFlag = document.querySelector('.language-setting > button img');
      const displayFlagSrc = displayFlag.getAttribute('data-src');
      expect(displayFlagSrc).toEqual(`images/flags/${languageInButton}.svg`);

      const displayText = document.querySelector('.language-setting > button').innerHTML;
      expect(displayText).toMatch(new RegExp(languageInButton.toUpperCase()));
    });

    it('should active float button same with language', async () => {
      await createChangeLanguagePresenter();

      const button = document.querySelectorAll('.float-setting [data-language]')[1];
      const languageInButton = button.getAttribute('data-language');
      await Language.changeFromButton(button);

      Language.setLanguage();

      const activeFloatButton = document.querySelector(`.language-setting > .float-setting [data-language="${languageInButton}"]`);
      expect(activeFloatButton).toHaveClass('active');
    });
  });
});
