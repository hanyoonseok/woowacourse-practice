import { $, validation, onKeyUpOnlyNumberRegex } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import { productAddTableRow } from '../constants/template.js';

export default class ProductManager {
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
    allProducts.forEach(product => this.view.addTableRow(table, productAddTableRow(product)));
  }

  addEventListeners() {
    $(SELECTOR.productAddButon).addEventListener('click', () => this.addProduct());
    $(SELECTOR.productPriceInput).addEventListener('keyup', () =>
      onKeyUpOnlyNumberRegex($(SELECTOR.productPriceInput)),
    );
    $(SELECTOR.productQuantityInput).addEventListener('keyup', () =>
      onKeyUpOnlyNumberRegex($(SELECTOR.productQuantityInput)),
    );
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
    const allProductsName = this.model.getProducts().map(e => e.name);
    if (validation.isProductInfoValid(allProductsName, productName, productPrice, productQuantity)) {
      const newProduct = this.model.makeProduct(productName, productPrice, productQuantity);
      const table = this.view.getTable();

      this.view.addTableRow(table, productAddTableRow(newProduct));
      this.model.addProduct(newProduct);
      this.initInput();
    }
  }
}
