import { Constants } from '../constants/constants.js';

const { serviceUrl, serviceAPIKey } = Constants;

export class FetchService {

  getFilmsBySearchValue(searchValue) {
    return fetch(`${serviceUrl}?apikey=${serviceAPIKey}&s=${searchValue}`);
  }
}