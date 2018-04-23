import { EventEmitter } from '../../services/eventEmitter.service.js';

let instance = null;

export class SearchController {
  constructor (model, view) {
    this.eventEmitter = new EventEmitter();
    if (!instance) {
      this.model = model;
      this.view = view;
      instance = this;
    }
    return instance;
  }

  init () {
    this.eventEmitter.attachEvent('searchController', 'search', this);
  }

  search (args) {
    this.model.search(args);
  }
}
