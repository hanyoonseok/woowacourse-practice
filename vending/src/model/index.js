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

  getVending() {
    return JSON.parse(localStorage.getItem(KEY.vending));
  }

  setVending(vending) {
    localStorage.setItem(KEY.vending, JSON.stringify(vending));
  }

  chargeVending(inputValue, randomCoinArray) {
    let vendingMachine = this.getVending();
    if (vendingMachine || vendingMachine === 0) {
      vendingMachine.price += inputValue;
      vendingMachine.coins.forEach((coin, i) => (coin += randomCoinArray[i]));
    } else if (vendingMachine === null) {
      vendingMachine = this.makeVending(inputValue, randomCoinArray);
    }
    this.setVending(vendingMachine);
  }

  makeVending(inputValue, randomCoinArray) {
    return {
      price: parseInt(inputValue),
      coins: randomCoinArray,
    };
  }
}
