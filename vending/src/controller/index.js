import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import AddTab from './addTab.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.addTab = new AddTab(this.view, this.model);
    this.showAddTab();
  }

  addEventListeners() {
    $(SELECTOR.addMenu).addEventListener('click', () => this.showAddTab());
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.showVendingTab());
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.showPurchaseTab());
  }

  showAddTab() {
    this.view.showAddTab();
    this.addTab.init();
  }
}
