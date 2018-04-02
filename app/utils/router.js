import { Constants } from '../constants/constants.js';
import { HomeContainer } from '../components/HomeContainer/home.container.js';
import { SearchContainer } from '../components/SearchContainer/search.container.js';
import { DetailsContainer } from '../components/DetailsContainer/details.container.js';

const [home, search, details] = Constants.routes;

const routematcher = {
  [home]: HomeContainer,
  [search]: SearchContainer,
  [details]: DetailsContainer
};

let instance = null;

export class Router {
  constructor() {
    if (!instance) {
      this.addHashChangeEventListener();
      let path = window.location.href.match(/#(.*)$/) ? window.location.href.match(/#(.*)$/)[1] : '/';
      this.navigate(path);
      instance = this;
    }
    return instance;
  }

  getFragment() {
    let fragment = '';
    let match = window.location.href.match(/#(.*)$/);
    fragment = match ? match[1] : '';

    return this.clearSlashes(fragment);
  }

  clearSlashes(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
  }

  addHashChangeEventListener() {
    window.addEventListener('hashchange', this.matchRoute.bind(this), false);
  }

  navigate(path) {
    path = path ? path : '';
    window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path;
  }

  matchRoute() {
    let path = this.getFragment(),
      delimiterIndex = path.indexOf('=');

    if (delimiterIndex !== -1) {
      var query = path.slice(delimiterIndex + 1);
      path = path.slice(0, delimiterIndex + 1);
    }

    switch (path) {
      case home:
        let homeContainer = new routematcher[home]();
        homeContainer.init();
        break;
      case search:
        if (query) {
          let searchContainer = new routematcher[search](query);
          searchContainer.init();
        }
        else {
          this.navigate(home)
        }
        break;
      case details:
        let detailsContainer = new routematcher[details](query);
        if (!detailsContainer.init()) {
          this.navigate(home);
        }
        break;
      default:
        this.navigate(home)
        break;
    }
  }
}