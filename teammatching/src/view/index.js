import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
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

  clearContainer() {
    this.$container.innerHTML = '';
  }

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', header);
  }

  renderProductManager() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', addTab);
  }

  clearInput(input) {
    input.value = '';
  }

  setInnerHTML(dom, value) {
    dom.innerHTML = value;
  }
}
