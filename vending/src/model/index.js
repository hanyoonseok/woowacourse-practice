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
    vending.coins.sort((a, b) => b.price - a.price);
    localStorage.setItem(KEY.vending, JSON.stringify(vending));
  }

  addCoinByExistence(vendingMachine, priceValue, quantityValue) {
    let selectedCoin = vendingMachine.coins.find(e => e.price === parseInt(priceValue));
    if (selectedCoin) {
      selectedCoin.quantity += parseInt(quantityValue);
    } else {
      vendingMachine.coins.push({
        price: parseInt(priceValue),
        quantity: parseInt(quantityValue),
      });
    }
  }

  addCoin(priceValue, quantityValue) {
    let vendingMachine = this.getVending();
    if (vendingMachine) {
      this.addCoinByExistence(vendingMachine, priceValue, quantityValue);
      vendingMachine.total += parseInt(priceValue) * parseInt(quantityValue);
    } else if (vendingMachine === null) {
      vendingMachine = this.makeVending(parseInt(priceValue), parseInt(quantityValue));
    }
    this.setVending(vendingMachine);
  }

  makeVending(price, quantity) {
    return {
      total: price * quantity,
      coins: [{ price, quantity }],
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
