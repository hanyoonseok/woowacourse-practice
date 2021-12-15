import { $ } from '../controller/utils.js';
import { header, addTab, vendingTab } from '../constants/template.js';
import { SELECTOR, VENDING_COIN_X_QUANTITY, COIN_ARRAY } from '../constants/constants.js';

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

  showVendingTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', vendingTab);
  }

  clearInput(input) {
    input.value = '';
  }

  initVendingTable(coins) {
    coins.forEach((coin, i) => ($(VENDING_COIN_X_QUANTITY(COIN_ARRAY[i])).innerHTML = `${coin}개`));
  }
}
