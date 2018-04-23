import { FilmController } from './film.controller.js';
import { EventAttach } from '../../services/eventAttach.service.js';

export class FilmView {
  constructor () {
    this.filmController = new FilmController();
    this.eventAttach = new EventAttach();
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
      const strHmtl = `
        <div class="panel-group-single">
          <div class="panel">
            <div class="panel-body" style="margin: 10px;">
                <div class="film-title"><span>Title:</span> ${film.Title}</div>            
                <div class="film-year"><span>Year:</span> ${film.Year}</div>
                <div class="film-genre"><span>Genre:</span> ${film.Type}</div>
              <img class="poster-image" src=${film.Poster}/>
            </div>
            <button class="btn btn-primary" id="back-button">Back</button>
          </div>
          
        </div>
        `;

      div.innerHTML = strHmtl;
      container.appendChild(div);

      const backButton = document.getElementById('back-button');

      this.eventAttach.attachEvent(backButton, 'click', this.backToPreviousRouteHandler.bind(this));
    }
  }

  backToPreviousRouteHandler () {
    this.filmController.backToPreviousRoute();
  }
}
