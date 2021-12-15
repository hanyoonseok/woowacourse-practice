import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class Controller {
  constructor(view) {
    this.view = view;
  }

  addEventListeners() {
    $(SELECTOR.addMenu).addEventListener('click', () => this.showAddTab());
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.showVendingTab());
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.showPurchaseTab());
  }

  showAddTab() {
    this.view.showAddTab();
  }
}
