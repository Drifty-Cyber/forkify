import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //PARCEL 2

class BookmarksView extends View {
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';
  _parentElement = document.querySelector('.bookmarks__list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    // console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
