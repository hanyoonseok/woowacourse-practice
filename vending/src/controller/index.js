import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import ProductManager from './productManager.js';
import VendingManager from './vendingManager.js';
import PurchaseManager from './purchaseManager.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.productManager = new ProductManager(this.view, this.model);
    this.vendingManager = new VendingManager(this.view, this.model);
    this.purchaseManager = new PurchaseManager(this.view, this.model);
    this.renderProductManager();
  }

  addEventListeners() {
    $(SELECTOR.addMenu).addEventListener('click', () => this.renderProductManager());
    $(SELECTOR.vendingMenu).addEventListener('click', () => this.renderVendingManager());
    $(SELECTOR.purchaseMenu).addEventListener('click', () => this.renderPurchaseManager());
  }

  renderProductManager() {
    this.view.renderProductManager();
    this.productManager.init();
  }

  renderVendingManager() {
    this.view.renderVendingManager();
    this.vendingManager.init();
  }

  renderPurchaseManager() {
    this.view.renderPurchaseManager();
    this.purchaseManager.init();
  }
}
