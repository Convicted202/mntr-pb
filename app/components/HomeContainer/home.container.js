import { SearchView } from '../Search/search.view.js';
import { SearchController } from '../Search/search.controller.js';
import { FilmsListView } from '../FilmsList/filmsList.view.js';
import { Model } from '../../utils/model/model.js';


export class HomeContainer {
  constructor() { }

  init() {
    this.model = new Model();
    this.searchView = new SearchView();
    this.searchView.init();
    this.searchController = new SearchController(this.model, this.searchView);
    this.filmsListView = new FilmsListView();
  }
}