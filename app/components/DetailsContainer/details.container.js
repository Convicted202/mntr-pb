import { FilmView } from '../Film/film.view.js';
import { Model } from '../../model/model.js';

export class DetailsContainer {
  constructor (query) {
    this.query = query;
  }

  init () {
    this.model = new Model();
    this.filmView = new FilmView();

    if (this.model.films[this.query]) {
      this.filmView.buildPanel(this.model.films[this.query]);
      return true;
    }
    return false;
  }
}
