import { EventEmitter } from '../../utils/eventEmitter.js';
import { Router } from '../../utils/router.js';
import { Constants } from '../../constants/constants.js';

export class FilmsListView {
  constructor () {
    this.router = new Router();
    this.eventEmitter = new EventEmitter();
  }

  init () {
    this.eventEmitter.attachEvent('filmsView', 'render', this);
  }

  render (data) {
    if (!data) {
      const container = document.getElementById('container'),
        div = document.createElement('div');

      div.innerHTML = 'No data found';
      container.appendChild(div);
    } else
      this.buildList(data);
  }

  buildList (films) {
    const container = document.getElementById('container'),
      div = document.createElement('div');

    container.innerHTML = '';
    div.innerHTML = '';

    if (films.length) {
      let strHmtl = '<div class="panel-group">';

      films.forEach((item, index) => {
        strHmtl += `
        <div class="panel panel-primary" style="display: inline-block; width:350px; margin: 20px;">          
          <div class="panel-body" style="margin: 10px;">
            <div> ${films[index].Title}</div>            
            <div> ${films[index].Year}</div>
            <div> ${films[index].Type}</div>
            <img class="poster-image" data-index="${index}" src=${films[index].Poster}/>
          </div>
        </div>`;
      });
      strHmtl += '</div>';
      div.innerHTML = strHmtl;
      container.appendChild(div);
    }
    const images = document.querySelectorAll('.poster-image');

    images.forEach(item => {
      item.addEventListener('click', this.getImageInfo);
    });
  }

  getImageInfo (e) {
    var path = `${Constants.routes[2]}${e.target.dataset.index}`;

    new Router().navigate(path);
  }
}
