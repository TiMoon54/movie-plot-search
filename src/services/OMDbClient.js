import axios from 'axios';

const apiKey = '396a2a00';
const dataApiURL = 'http://www.omdbapi.com/';
const resultsByPage = 10;

class OMDbClient {
  constructor() {
    if (!OMDbClient.instance) {
      const config = {
        timeout: 1000,
        params: {
          type: 'movie',
          apiKey
        }
      };

      this._client = axios.create({
        ...config
      });

      OMDbClient.instance = this;
    }

    return OMDbClient.instance;
  }

  getMovieList(search = '', page = 1) {
    return this._client.get(dataApiURL, { params: { s: search, page } });
  }

  getMovieInfo(movieId) {
    return this._client.get(dataApiURL, { params: { i: movieId } });
  }

  getResultsByPage() {
    return resultsByPage;
  }
}

const instance = new OMDbClient();
Object.freeze(instance);

export default instance;
