const storageKey = 'favoriteMovies';
const separator = ',';

class FavoritesController {
  constructor() {
    if (!FavoritesController.instance) {
      const storageItem = localStorage.getItem(storageKey);
      this._storage = storageItem === null ? [] : storageItem.split(separator);

      FavoritesController.instance = this;
    }

    return FavoritesController.instance;
  }

  add(imdbID) {
    if (!this._storage.includes(imdbID)) {
      this._storage.push(imdbID);
      localStorage.setItem(storageKey, this._storage.join(separator));
    }
  }

  remove(imdbID) {
    this._storage = this._storage.filter(el => el !== imdbID);
    localStorage.setItem(storageKey, this._storage.join(separator));
  }

  get() {
    return this._storage;
  }

  isFavorite(imdbID) {
    return this._storage.includes(imdbID);
  }
}

const instance = new FavoritesController();

export default instance;
