import { $ } from '../controller/utils.js';
import { header, addTab } from '../constants/template.js';
import { SELECTOR } from '../constants/constants.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.showHeader();
    this.setContainer();
  }

  getTable() {
    return document.querySelector('tbody');
  }

  clearTable(table) {
    table.innerHTML = '';
  }

  addTableHeader(table, headerForm) {
    table.insertAdjacentHTML('beforeend', headerForm);
  }

  addTableRow(table, rowForm) {
    table.insertAdjacentHTML('beforeend', rowForm);
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

  clearInput(input) {
    input.value = '';
  }
}
