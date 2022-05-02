import { PreferenceIdb } from '../data/idb-source';
import dictionary from '../../json/language.json';

const Theme = {
  async init({ buttons, displayIcon }) {
    this.availableTheme = {
      orange: '#fd9644',
      green: '#26de81',
      red: '#fc5c65',
      blue: '#45aaf2',
      night: '#1f1b24',
    };
    this.metaColor = [
      document.querySelector('meta[name="theme-color"]'),
      document.querySelector('meta[name="msapplication-navbutton-color"]'),
      document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]'),
    ];
    this.favicon = document.querySelector('link[rel="shortcut icon"]');
    this.buttons = buttons;
    this.displayIcon = displayIcon;

    await this.firstTimeSave();
    await this.loadFromIdb();

    this.buttons.forEach((button) => {
      button.addEventListener('click', () => this.changeFromButton(button));
    });
  },

  async isThemeSaved() {
    const theme = await PreferenceIdb.getPreference('theme');
    return theme;
  },

  async firstTimeSave() {
    if (!(await this.isThemeSaved())) {
      await this.saveTheme('orange');
    }
  },

  async loadFromIdb() {
    if (await this.isThemeSaved()) {
      const theme = await PreferenceIdb.getPreference('theme');
      this.changeTheme(theme.content);
    }
  },

  async saveTheme(color) {
    const options = {
      type: 'theme',
      content: color,
    };
    await PreferenceIdb.putPreference(options, 'theme');
  },

  async changeFromButton(button) {
    const newTheme = button.getAttribute('data-color');
    this.changeTheme(newTheme);
    await this.saveTheme(newTheme);
  },

  changeTheme(newTheme) {
    if (this.availableTheme[newTheme]) {
      const oldTheme = document.body.getAttribute('data-theme');
      document.body.setAttribute('data-theme', newTheme);
      this.setTheme(oldTheme);
    } else {
      document.body.setAttribute('data-theme', 'orange');
      this.saveTheme('orange');
      this.setTheme('orange');
    }
  },

  setTheme(oldTheme) {
    const newTheme = document.body.getAttribute('data-theme');
    const oldFloatIcon = document.querySelector('.theme-setting > .float-setting .active');
    const newFloatIcon = document.querySelector(`.theme-setting > .float-setting [data-color="${newTheme}"]`);

    this.displayIcon.classList.remove(oldTheme);
    this.displayIcon.classList.add(newTheme);
    oldFloatIcon.classList.remove('active');
    newFloatIcon.classList.add('active');

    if (this.favicon) {
      if (newTheme === 'night') {
        this.favicon.setAttribute('href', 'images/icons/orange.ico');
      } else {
        this.favicon.setAttribute('href', `images/icons/${newTheme}.ico`);
      }
    }

    this.metaColor.forEach((meta) => {
      if (meta) meta.setAttribute('content', this.availableTheme[newTheme]);
    });
  },
};

const Language = {
  async init({ buttons, displayButton, activeFloatButton }) {
    this.availableLanguage = ['en', 'id'];
    this.buttons = buttons;
    this.displayButton = displayButton;
    this.activeFloatButton = activeFloatButton;

    await this.firstTimeSave();
    await this.loadFromIdb();

    this.buttons.forEach((button) => {
      button.addEventListener('click', async () => {
        await this.changeFromButton(button);
        window.location.reload();
      });
    });
  },

  async isLanguageSaved() {
    const language = await PreferenceIdb.getPreference('language');
    return language;
  },

  async firstTimeSave() {
    if (!(await this.isLanguageSaved())) {
      this.saveLanguage('en');
    }
  },

  async loadFromIdb() {
    if (await this.isLanguageSaved()) {
      const language = await PreferenceIdb.getPreference('language');
      this.changeLanguage(language.content);
    }
  },

  async saveLanguage(language) {
    const options = {
      type: 'language',
      content: language,
    };
    await PreferenceIdb.putPreference(options, 'language');
  },

  async changeFromButton(button) {
    const newLanguage = button.getAttribute('data-language');
    const rootElement = document.documentElement;
    rootElement.setAttribute('lang', newLanguage);
    await this.saveLanguage(newLanguage);
  },

  changeLanguage(newLanguage) {
    if (this.availableLanguage.includes(newLanguage)) {
      const rootElement = document.documentElement;
      rootElement.setAttribute('lang', newLanguage);
      this.setLanguage();
    } else {
      const rootElement = document.documentElement;
      rootElement.setAttribute('lang', 'en');
      this.saveLanguage('en');
    }
  },

  setLanguage() {
    const newLanguage = document.documentElement.lang;
    const altImage = newLanguage === 'en' ? 'USA' : 'Indonesia';
    const newFloatButton = document.querySelector(`.language-setting > .float-setting [data-language="${newLanguage}"]`);

    this.displayButton.innerHTML = `
      <img data-src="images/flags/${newLanguage}.svg" alt="${altImage}" class="lazyload">${newLanguage.toUpperCase()}<i class="fas fa-angle-down fa-fw"></i>
    `;
    this.activeFloatButton.classList.remove('active');
    newFloatButton.classList.add('active');

    document.title = this.getSpecificContent('title');
  },

  getSpecificLanguage(keyword) {
    const language = document.documentElement.lang;
    const result = dictionary.specific.filter((list) => list.item === keyword);
    return (result.length > 0) ? result[0][language] : null;
  },

  getSpecificContent(keyword) {
    return this.getSpecificLanguage(keyword).content;
  },

  setGeneralLanguageByRange(from, to) {
    const wordList = dictionary.general;
    let loopStart = from - 1;
    const loopEnd = to || from;
    for (loopStart; loopStart < loopEnd; loopStart += 1) {
      this.changeLanguageByTarget(wordList[loopStart]);
    }
  },

  setGeneralLanguage() {
    const wordList = dictionary.general;
    wordList.forEach((word) => {
      this.changeLanguageByTarget(word);
    });
  },

  changeLanguageByTarget(word) {
    const language = document.documentElement.lang;
    const targets = document.querySelectorAll(`[data-lang="${word.item}"]`);
    if (targets) {
      targets.forEach((target) => {
        const targetElement = target;
        if (word[language].content) targetElement.innerHTML = word[language].content;
        if (word[language].title) targetElement.setAttribute('title', word[language].title);
        if (word[language].label) targetElement.setAttribute('aria-label', word[language].label);
      });
    }
  },
};

export { Theme, Language };
