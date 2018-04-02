import { FetchService } from '../fetchService.js';
import { EventEmitter } from '../../utils/eventEmitter.js';

var instance = null;

export class Model {
  constructor() {
    if (!instance) {
      this.fetchService = new FetchService();
      this.eventEmitter = new EventEmitter();
      this.films = [];

      instance = this;
    }
    return instance;
  }

  search(arg) {
    this.fetchService.getFilmsBySearchValue(arg)
      .then((response) => {
        return response.json();
      }).then(searchData => {
        this.films = searchData.Search;
        this.eventEmitter.triggerEvent('filmsView', 'render', this.films);
      });
  }
}