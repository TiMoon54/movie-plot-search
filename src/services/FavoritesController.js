const storageKey = 'favoriteMovies';
const separator = ',';

class FavoritesController {
  constructor() {
    if (!FavoritesController.instance) {
      const storageItem = localStorage.getItem(storageKey);
      this.storage = storageItem ? storageItem.split(separator) : [];

      FavoritesController.instance = this;
    }

    return FavoritesController.instance;
  }

  get storage() {
    return this._storage;
  }

  set storage(value) {
    this._storage = value;
    localStorage.setItem(storageKey, value.join(separator));
  }

  toggle(imdbID) {
    if (this.isFavorite(imdbID)) {
      this.storage = this.storage.filter(el => el !== imdbID);
    } else {
      this.storage = [...this.storage, imdbID];
    }
  }

  isFavorite(imdbID) {
    return this.storage.includes(imdbID);
  }
}

const instance = new FavoritesController();

export default instance;
