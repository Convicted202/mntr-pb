import { SearchView } from '../Search/search.view.js';
import { SearchController } from '../Search/search.controller.js';
import { FilmsListView } from '../FilmsList/filmsList.view.js';
import { Model } from '../../utils/model/model.js';

export class SearchContainer {
  constructor (query) {
    this.query = query;
  }

  init () {
    let view = new SearchView();
    view.init();
    let model = new Model(),
      searchController = new SearchController(model, view),
      filmsListView = new FilmsListView();

    filmsListView.init();
    view.search(this.query);
  }
}
