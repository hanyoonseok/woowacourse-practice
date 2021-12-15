import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import { addTabTableRow } from '../constants/template.js';

export default class AddTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initTable();
  }

  initTable() {
    const table = this.view.getTable();
    const allProducts = this.model.getProducts();
    allProducts.forEach(product => this.view.addTableRow(table, addTabTableRow(product)));
  }

  addEventListeners() {
    $(SELECTOR.productAddButon).addEventListener('click', () => this.addProduct());
  }

  initInput() {
    this.view.clearInput($(SELECTOR.productNameInput));
    this.view.clearInput($(SELECTOR.productPriceInput));
    this.view.clearInput($(SELECTOR.productQuantityInput));
  }

  addProduct() {
    const productName = $(SELECTOR.productNameInput);
    const productPrice = $(SELECTOR.productPriceInput);
    const productQuantity = $(SELECTOR.productQuantityInput);
    const newProduct = this.model.makeProduct(productName, productPrice, productQuantity);
    const table = this.view.getTable();
    const allProducts = this.model.getProducts();
    this.view.addTableRow(table, addTabTableRow(newProduct));
    this.model.addProduct(newProduct);
    this.initInput();
  }
}
