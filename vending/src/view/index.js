import { $ } from '../controller/utils.js';
import { header, addTab } from '../constants/template.js';
import { SELECTOR } from '../constants/constants.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.showHeader();
    this.setContainer();
  }

  setContainer() {
    this.$container = $(SELECTOR.container);
  }

  clearContainer() {
    this.$container.innerHTML = '';
  }

  showHeader() {
    this.$app.insertAdjacentHTML('afterbegin', header);
  }

  showAddTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', addTab);
  }
}
