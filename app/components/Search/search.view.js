import { EventEmitter } from '../../utils/eventEmitter.js';
import { Router } from '../../utils/router.js';

let instance = null;

export class SearchView {
  constructor() {
    if (!instance) {
      this.eventEmitter = new EventEmitter();
      this.router = new Router();
      instance = this;
    }
    return instance;
  }

  init() {
    this.searchContainer = document.getElementById('search-container');

    if (!this.searchContainer.children.length) {
      var div = document.createElement('div');
      div.innerHTML = '<input id="search-field" /><button id="search-button">Search</button>'
      this.searchContainer.appendChild(div);

      this.getElemRefs();
      this.addListeners();
    }
  }

  getElemRefs() {
    this.searchButton = document.getElementById('search-button');
    this.searchInput = document.getElementById('search-field');
  }

  addListeners() {
    this.searchButton.addEventListener('click', this.searchHandler.bind(this));
  }

  clearSearch() {
    this.searchInput.value = '';
  }

  searchHandler() {
    var path = 'home?search=' + document.getElementById('search-field').value;
    this.router.navigate(path);
  }

  search(val) {
    this.searchInput.value = val || this.searchInput.value;
    if (this.searchInput.value) {
      this.eventEmitter.triggerEvent('searchController', 'search', this.searchInput.value);
    }
  }
}