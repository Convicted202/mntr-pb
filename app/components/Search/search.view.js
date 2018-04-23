import { EventEmitter } from '../../services/eventEmitter.service.js';
import { Router } from '../../router.js';

let instance = null;

export class SearchView {
  constructor () {
    if (!instance) {
      this.eventEmitter = new EventEmitter();
      this.router = new Router();
      instance = this;
    }
    return instance;
  }

  init () {
    this.searchContainer = document.getElementById('search-container');

    if (!this.searchContainer.children.length) {
      const div = document.createElement('div'),
        header = document.createElement('h2');

      header.innerHTML = 'Film Tracker';
      header.className = 'search-header';

      div.className = 'col-md-12';
      div.innerHTML = '<input class="search-field" id="search-field" /><button class="search-button" id="search-button">Search</button>';
      this.searchContainer.appendChild(header);
      this.searchContainer.appendChild(div);

      this.getElemRefs();
      this.addListeners();
    }
  }

  getElemRefs () {
    this.searchButton = document.getElementById('search-button');
    this.searchInput = document.getElementById('search-field');
  }

  addListeners () {
    this.searchButton.addEventListener('click', this.searchHandler.bind(this));
  }

  searchHandler () {
    const path = `home?search=${document.getElementById('search-field').value}`;

    this.router.navigate(path);
  }

  search (val) {
    this.searchInput.value = val || this.searchInput.value;
    if (this.searchInput.value)
      this.eventEmitter.triggerEvent('searchController', 'search', this.searchInput.value);
  }
}
