import { SearchView } from '../Search/search.view.js';
import { SearchController } from '../Search/search.controller.js';
import { FilmsListView } from '../FilmsList/filmsList.view.js';
import { Model } from '../../model/model.js';

export class SearchContainer {
  constructor (query) {
    this.query = query;
  }

  init () {
    const view = new SearchView(),
      model = new Model(),
      searchController = new SearchController(model, view),
      filmsListView = new FilmsListView();

    view.init();
    searchController.init();
    filmsListView.init();
    view.search(this.query);
  }
}
