import { $, onKeyUpNumericEvent, validation } from './utils.js';
import { SELECTOR, COIN_ARRAY } from '../constants/constants.js';
import { purchaseTableHeader, purchaseTableRow } from '../constants/template.js';

export default class PurchaseTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initDom();
    this.initTable();
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
      onKeyUpNumericEvent($(SELECTOR.chargeInput)),
    );
  }

  initDom() {
    const chargeAmount = this.model.getCharge();
    this.view.clearInput($(SELECTOR.chargeInput));
    this.view.setInnerHTML($(SELECTOR.chargeAmount), chargeAmount);
  }

  isChargeInputValid(chargeInput) {
    return validation.isInputNumberValid(chargeInput) && validation.isMultipleOf10(chargeInput);
  }

  chargeMoney() {
    const chargeInput = $(SELECTOR.chargeInput);
    if (this.isChargeInputValid(chargeInput)) {
      this.model.addCharge(chargeInput);
      this.initDom();
    }
  }

  addAllPurchaseButtonEvent() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.purchaseButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.purchaseProduct(button.dataset.target)),
    );
  }

  purchaseProduct(target) {
    const allProducts = this.model.getProducts();
    let charge = this.model.getCharge();
    const selectedProduct = allProducts.find(e => e.name === target);
    if (selectedProduct.quantity >= 1) {
      selectedProduct.quantity -= 1;
      charge -= selectedProduct.price;
      this.model.setProducts(allProducts);
      this.model.setCharge(charge);
      this.initTable();
      this.initDom();
    }
  }

  getReturnCoinByCharge(type, vendingMachine, newVendingCoins) {
    let returnCoin;
    if (type) {
      //charge > vending -> 원래 vending coin
      returnCoin = vendingMachine.coins;
    } else {
      //새로운 new vending
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

  returnMoney() {
    const charge = this.model.getCharge();
    const returnCoinArray = this.returnMinimumCoin(charge);
    this.initDom();
    this.view.initReturnTable(returnCoinArray);
  }
}
