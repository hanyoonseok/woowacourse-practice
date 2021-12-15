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
      const newCoinArray = vendingMachine.coins.map((coin, i) => (coin += randomCoinArray[i]));
      vendingMachine.price += parseInt(inputValue);
      vendingMachine.coins = newCoinArray;
    } else if (vendingMachine === null) {
      vendingMachine = this.makeVending(parseInt(inputValue), randomCoinArray);
    }
    this.setVending(vendingMachine);
  }

  makeVending(inputValue, randomCoinArray) {
    return {
      price: parseInt(inputValue),
      coins: randomCoinArray,
    };
  }

  getCharge() {
    return JSON.parse(localStorage.getItem(KEY.charge));
  }

  setCharge(charge) {
    localStorage.setItem(KEY.charge, JSON.stringify(charge));
  }

  addCharge(chargeInput) {
    let charge = this.getCharge();
    if (charge || charge === 0) {
      charge += parseInt(chargeInput.value);
    } else if (charge === null) {
      charge = parseInt(chargeInput.value);
    }

    this.setCharge(charge);
  }
}
