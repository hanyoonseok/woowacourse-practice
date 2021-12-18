import { $, onKeyUpOnlyNumberRegex, validation } from './utils.js';
import { SELECTOR, COIN_ARRAY } from '../constants/constants.js';
import {
  purchaseTableHeader,
  purchaseTableRow,
  vendingTableHeader,
  purchaseReturnTableRow,
} from '../constants/template.js';

export default class PurchaseManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initElements();
    this.initTable();
    this.initReturnTable();
  }

  initTable() {
    const table = this.view.getTable();
    const allProducts = this.model.getProducts();
    this.view.clearTable(table);
    this.view.addTableHeader(table, purchaseTableHeader);
    allProducts.forEach(product => this.view.addTableRow(table, purchaseTableRow(product)));
    this.addAllPurchaseButtonEvent();
  }

  addEventListeners() {
    $(SELECTOR.chargeButton).addEventListener('click', () => this.chargeMoney());
    $(SELECTOR.returnButton).addEventListener('click', () => this.returnMoney());
    $(SELECTOR.chargeInput).addEventListener('keyup', () =>
      onKeyUpOnlyNumberRegex($(SELECTOR.chargeInput)),
    );
  }

  initElements() {
    const chargeAmount = this.model.getCharge();
    this.view.clearInput($(SELECTOR.chargeInput));
    this.view.setInnerHTML($(SELECTOR.chargeAmount), chargeAmount);
  }

  chargeMoney() {
    const chargeInput = $(SELECTOR.chargeInput);
    if (validation.isChargeInputValid(chargeInput)) {
      this.model.addCharge(chargeInput);
      this.initElements();
    }
  }

  addAllPurchaseButtonEvent() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.purchaseProduct(button.dataset.target)),
    );
  }

  purchaseProduct(target) {
    let allProducts = this.model.getProducts();
    const selectedProduct = allProducts.find(e => e.name === target);
    let charge = this.model.getCharge();
    if (charge >= selectedProduct.price) {
      selectedProduct.quantity -= 1;
      charge -= selectedProduct.price;
      if (selectedProduct.quantity === 0) {
        allProducts = allProducts.filter(e => e.name !== selectedProduct.name);
      }
      this.model.setProducts(allProducts);
      this.model.setCharge(charge);
      this.initTable();
      this.initElements();
    }
  }

  getReturnCoinByCharge(type, vendingMachine, newVendingCoins) {
    let returnCoin;
    if (type) {
      returnCoin = vendingMachine.coins;
    } else if (type === false) {
      returnCoin = vendingMachine.coins.map((quantity, i) => quantity - newVendingCoins[i]);
    }
    vendingMachine.coins = newVendingCoins;
    this.model.setVending(vendingMachine);

    return returnCoin;
  }

  returnMinimumCoin(charge) {
    const vendingMachine = this.model.getVending();
    const type = charge > vendingMachine.price;
    let newVendingCoins = vendingMachine.coins.map((quantity, i) => {
      while (charge >= COIN_ARRAY[i] && quantity > 0) {
        charge -= COIN_ARRAY[i];
        quantity -= 1;
        vendingMachine.price -= COIN_ARRAY[i];
      }
      return quantity;
    });
    this.model.setCharge(charge);

    return this.getReturnCoinByCharge(type, vendingMachine, newVendingCoins);
  }

  returnMinimumCoin2(charge) {
    const vendingMachine = this.model.getVending();
    let minimumCoinArray;
    if (charge > vendingMachine.total) {
      minimumCoinArray = vendingMachine.coins;
    } else {
      minimumCoinArray = vendingMachine.coins.map(coin => {
        let i = 0;
        while (charge >= coin.price && coin.quantity > 0) {
          charge -= coin.price;
          coin.quantity -= 1;
          vendingMachine.total -= coin.price;
          i += 1;
        }
        return { price: coin.price, quantity: i };
      });
    }
    this.model.setCharge(charge);
    this.model.setVending(vendingMachine);

    return minimumCoinArray;
  }

  returnMoney() {
    const charge = this.model.getCharge();
    const returnCoinArray = this.returnMinimumCoin2(charge);
    this.initElements();
    this.view.initReturnTable(returnCoinArray);
  }

  initReturnTable() {
    const table = document.querySelectorAll('tbody')[1];
    const vending = this.model.getVending();
    if (vending) {
      this.view.clearTable(table);
      this.view.addTableHeader(table, vendingTableHeader);
      vending.coins.forEach(coin => this.view.addTableRow(table, purchaseReturnTableRow(coin)));
    }
  }
}
