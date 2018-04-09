
import { FilmController } from './film.controller.js';
import { EventHelper } from '../../utils/eventAttachHelper.service.js';

export class FilmView {
  constructor () {
    this.filmController = new FilmController();
    this.eventHelper = new EventHelper();
  }

  init () {
    this.container = document.getElementById('container');
  }

  render (data) {
    this.container.innerHTML = '';
    this.buildPanel(data);
  }

  buildPanel (film) {
    const container = document.getElementById('container'),
      searchContainer = document.getElementById('search-container'),
      div = document.createElement('div');

    searchContainer.innerHTML = '';
    container.innerHTML = '';
    div.innerHTML = '';

    if (film) {
      let strHmtl = `
        <div class="panel-group">
          <div class="panel panel-primary" style="display: inline-block; width:350px; margin: 20px;">
            <div class="panel-body" style="margin: 10px;">
              <div> ${film.Title}</div>
              <div> ${film.Year}</div>
              <div> ${film.Type}</div>
              <img class="poster-image" src=${film.Poster}/>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" id="back-button">Back</button>`;

      div.innerHTML = strHmtl;
      container.appendChild(div);

      const backButton = document.getElementById('back-button');

      this.eventHelper.attachEvent(backButton, 'click', this.backToPreviousRouteHandler.bind(this));
    }
  }

  backToPreviousRouteHandler () {
    this.filmController.backToPreviousRoute();
  }
}
