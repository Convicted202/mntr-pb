import { SearchView } from '../Search/search.view.js';
import { SearchController } from '../Search/search.controller.js';
import { Model } from '../../services/model.js';


export class HomeContainer {
  init () {
    this.model = new Model();
    this.searchView = new SearchView();
    this.searchView.init();
    this.searchController = new SearchController(this.model, this.searchView);
  }
}
