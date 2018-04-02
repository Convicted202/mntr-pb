import { EventEmitter } from '../../utils/eventEmitter.js';
// import { View } from './search.view.js';
// import { Model } from '../../utils/model/model.js';

let Model, View;

export class SearchController {
  constructor(model, view) {
    // else {
    //   return instance;
    // }

    this.eventEmitter = new EventEmitter();
    if (!(Model || View)) {
      Model = model;
      View = view;
    }
    this.init();

  }

  init() {
    console.log('SearchController');
    this.eventEmitter.attachEvent('searchController', 'search', this);
  }

  search(args) {
    console.log('search', args);
    console.log('search', Model);
    Model.search(args);
  }
}