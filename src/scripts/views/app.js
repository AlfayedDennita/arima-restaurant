import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Header from '../app-shell/header';
import Main from '../app-shell/main';
import Footer from '../app-shell/footer';
import Plugins from '../app-shell/plugins';
import { Theme, Language } from '../utils/preferences-presenter';

class App {
  constructor({
    header, main, footer, theme, language,
  }) {
    this.header = header;
    this.footer = footer;
    this.theme = theme;
    this.language = language;
    this.mainContainer = main.container;

    this.appShellInit();
    this.preferencesInit();
  }

  appShellInit() {
    Header.init(this.header);
    Main.init();
    Footer.init(this.footer);
    Plugins.init(this.footer);
  }

  preferencesInit() {
    Theme.init(this.theme);
    Language.init(this.language);
  }

  async renderPage() {
    Header.removeOffCanvasMenu();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || routes['/error'];
    page.render(this.mainContainer);
    await page.afterRender();
    Language.setGeneralLanguage();
  }
}

export default App;
