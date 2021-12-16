import { $ } from '../controller/utils.js';
import { header, addTab, vendingTab, purchaseTab } from '../constants/template.js';
import {
  SELECTOR,
  VENDING_COIN_X_QUANTITY,
  COIN_ARRAY,
  COIN_X_QUANTITY,
} from '../constants/constants.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.renderHeader();
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

  renderHeader() {
    this.$app.insertAdjacentHTML('afterbegin', header);
  }

  renderProductManager() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', addTab);
  }

  renderVendingManager() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', vendingTab);
  }

  renderPurchaseManager() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', purchaseTab);
  }

  clearInput(input) {
    input.value = '';
  }

  setInnerHTML(dom, value) {
    dom.innerHTML = value;
  }

  initVendingTable(coins) {
    coins.forEach((coin, i) => ($(VENDING_COIN_X_QUANTITY(COIN_ARRAY[i])).innerHTML = `${coin}개`));
  }

  initReturnTable(coins) {
    coins.forEach(
      coin => $(`return-coin-${coin.price}-quantity`).innerHTML = `${coin.quantity}개`,
    );
  }
}
