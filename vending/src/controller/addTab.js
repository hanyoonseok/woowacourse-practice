import { $, validation, onKeyUpNumericEvent } from './utils.js';
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
    $(SELECTOR.productPriceInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.productPriceInput)),
    );
    $(SELECTOR.productQuantityInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.productQuantityInput)),
    );
  }

  initInput() {
    this.view.clearInput($(SELECTOR.productNameInput));
    this.view.clearInput($(SELECTOR.productPriceInput));
    this.view.clearInput($(SELECTOR.productQuantityInput));
  }

  isProductNameValid(productName) {
    const allProductsName = this.model.getProducts().map(e => e.name);
    return (
      !validation.isBlankExist(productName) &&
      !validation.isDuplicated(allProductsName, productName)
    );
  }

  isProductPriceValid(productPrice) {
    return (
      !validation.isBlankExist(productPrice) &&
      validation.isPositiveNumber(productPrice) &&
      validation.isBiggerThan100(productPrice) &&
      validation.isMultipleOf10(productPrice)
    );
  }

  isProductQuantityValid(productQuantity) {
    return (
      !validation.isBlankExist(productQuantity) && validation.isPositiveNumber(productQuantity)
    );
  }

  isProductInfoValid(productName, productPrice, productQuantity) {
    return (
      this.isProductNameValid(productName) &&
      this.isProductPriceValid(productPrice) &&
      this.isProductQuantityValid(productQuantity)
    );
  }

  addProduct() {
    const productName = $(SELECTOR.productNameInput);
    const productPrice = $(SELECTOR.productPriceInput);
    const productQuantity = $(SELECTOR.productQuantityInput);
    if (this.isProductInfoValid(productName, productPrice, productQuantity)) {
      const newProduct = this.model.makeProduct(productName, productPrice, productQuantity);
      const table = this.view.getTable();

      this.view.addTableRow(table, addTabTableRow(newProduct));
      this.model.addProduct(newProduct);
      this.initInput();
    }
  }
}
