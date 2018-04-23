import { EventEmitter } from '../../services/eventEmitter.service.js';
import { Router } from '../../router.js';
import { Constants } from '../../constants/constants.js';
import { EventAttach } from '../../services/eventAttach.service.js';

export class FilmsListView {
  constructor () {
    this.router = new Router();
    this.eventEmitter = new EventEmitter();
    this.eventAttach = new EventAttach();
  }

  init () {
    this.eventEmitter.attachEvent('filmsView', 'render', this);
  }

  render (data) {
    if (!data) {
      const container = document.getElementById('container'),
        div = document.createElement('div');

      container.innerHTML = '';
      div.innerHTML = 'No data found';
      div.className = 'no-data';
      container.appendChild(div);
    } else
      this.buildList(data);
  }

  buildList (films) {
    const container = document.getElementById('container');

    container.innerHTML = '';

    if (films.length) {
      let strHmtl = '<div class="panel-group">';

      films.forEach((item, index) => {
        strHmtl += `
        <div class="panel">          
          <div class="panel-body" style="margin: 10px;">
            <div class="panel-header">
              <div class="film-title"><span>Title:</span> ${films[index].Title}</div>            
              <div class="film-year"><span>Year:</span> ${films[index].Year}</div>
              <div class="film-genre"><span>Genre:</span> ${films[index].Type}</div>
            </div>
            <img class="film-poster" data-index="${index}" src=${films[index].Poster}/>
          </div>
        </div>`;
      });
      strHmtl += '</div>';
      container.innerHTML = strHmtl;
    }
    const images = document.querySelectorAll('.film-poster');

    this.eventAttach.attachEvent(images, 'click', this.getImageInfo);
  }

  getImageInfo (e) {
    var path = `${Constants.routes[2]}${e.target.dataset.index}`;

    new Router().navigate(path);
  }
}
