import { KEY } from '../constants/constants.js';

export default class Model {
  makeProduct(productNameInput, productPriceInput, productQuantityInput) {
    return {
      name: productNameInput.value,
      price: parseInt(productPriceInput.value),
      quantity: parseInt(productQuantityInput.value),
    };
  }

  getProducts() {
    return JSON.parse(localStorage.getItem(KEY.product)) || [];
  }

  setProducts(products) {
    return localStorage.setItem(KEY.product, JSON.stringify(products));
  }

  addProduct(product) {
    const allProducts = this.getProducts();
    allProducts.push(product);
    this.setProducts(allProducts);
  }
}
