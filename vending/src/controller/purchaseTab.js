import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import { purchaseTableHeader, purchaseTableRow } from '../constants/template.js';

export default class PurchaseTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initDom();
    this.initTable();
  }

  initTable() {
    const table = this.view.getTable();
    const allProducts = this.model.getProducts();
    this.view.clearTable(table);
    this.view.addTableHeader(table, purchaseTableHeader);
    allProducts.forEach(product => this.view.addTableRow(table, purchaseTableRow(product)));
  }

  addEventListeners() {
    $(SELECTOR.chargeButton).addEventListener('click', () => this.chargeMoney());
    $(SELECTOR.returnButton).addEventListener('click', () => returnMoney());
  }

  initDom() {
    const chargeAmount = this.model.getCharge();
    this.view.clearInput($(SELECTOR.chargeInput));
    this.view.setInnerHTML($(SELECTOR.chargeAmount), chargeAmount);
  }

  chargeMoney() {
    const chargeInput = $(SELECTOR.chargeInput);
    this.model.addCharge(chargeInput);
    this.initDom();
  }

  returnMoney() {}
}
