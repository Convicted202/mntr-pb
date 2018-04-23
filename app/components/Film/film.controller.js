import { Router } from '../../router.js';

export class FilmController {
  constructor () {
    this.router = new Router();
  }

  backToPreviousRoute () {
    this.router.navigateBackRoute();
  }
}
