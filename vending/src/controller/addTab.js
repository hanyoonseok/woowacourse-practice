import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class AddTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.productAddButon).addEventListener('click', () => this.addProduct());
  }

  addProduct() {
    const productName = $(SELECTOR.productNameInput);
    const productPrice = $(SELECTOR.productPriceInput);
    const productQuantity = $(SELECTOR.productQuantityInput);
    const newProduct = this.model.makeProduct(productName, productPrice, productQuantity);
  }
}
