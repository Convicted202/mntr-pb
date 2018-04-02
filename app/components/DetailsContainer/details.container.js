import { FilmsListView } from '../FilmsList/filmsList.view.js';
import { Model } from '../../utils/model/model.js';


export class DetailsContainer {
  constructor (query) {
    this.query = query;
  }


  init () {
    this.model = new Model();
    this.filmsListView = new FilmsListView();
    if (this.model.films[this.query]) {
      this.filmsListView.buildList([this.model.films[this.query]]);
      return true;
    }
    return false;
  }
}
