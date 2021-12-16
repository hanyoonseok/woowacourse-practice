import { $, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR, COIN_ARRAY } from '../constants/constants.js';
import { vendingTableRow,vendingTableHeader } from '../constants/template.js';

export default class VendingManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initElements();
  }

  addEventListeners() {
    $(SELECTOR.vendingChargeButton).addEventListener('click', () => this.addVendingCoin());
  }

  addVendingCoin() {
    const price = $(SELECTOR.vendingChargePrice);
    const quantity = $(SELECTOR.vendingChargeQuantity);
    this.model.addCoin(price.value, quantity.value);
    this.initElements();
  }

  initTable() {
    const vending = this.model.getVending();
    const table = this.view.getTable();
    if (vending) {
      this.view.clearTable(table);
      this.view.addTableHeader(table, vendingTableHeader);
      vending.coins.forEach(coin => this.view.addTableRow(table, vendingTableRow(coin)))
    }
  }

  initElements() {
    const vending = this.model.getVending();
    if (vending || vending.total === 0) {
      this.view.setInnerHTML($(SELECTOR.vendingChargeAmount), this.model.getVending().total);
    }
    this.view.clearInput($(SELECTOR.vendingChargePrice));
    this.view.clearInput($(SELECTOR.vendingChargeQuantity));
    this.initTable();
  }
}
