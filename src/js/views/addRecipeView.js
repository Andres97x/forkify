import View from './View.js';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'New recipe was succsessfully uploaded';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnShow = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerCloseWindow();
  }

  toogleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnShow.addEventListener('click', this.toogleWindow.bind(this));
  }

  _addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', this.toogleWindow.bind(this));
    this._overlay.addEventListener('click', this.toogleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
