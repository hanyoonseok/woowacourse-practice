import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.asd = asd;
    this.$container = $(SELECTOR.container);
  }

  addEventListeners() {
    $(SELECTOR.asd).addEventListener('click', () => this.renderasd());
  }

  renderasd() {
    this.view.renderasd();
    this.asd.init();
  }
}
