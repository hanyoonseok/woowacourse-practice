import { $, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR, COIN_ARRAY } from '../constants/constants.js';

export default class VendingManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
    this.initElements();
  }

  addEventListeners() {
    $(SELECTOR.vendingChargeButton).addEventListener('click', () => this.addVendingCharge());
    $(SELECTOR.vendingChargeInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.vendingChargeInput)),
    );
  }

  addVendingCharge() {
    const chargeInput = $(SELECTOR.vendingChargeInput);
    if (validation.isInputNumberValid(chargeInput) && validation.isMultipleOf10(chargeInput)) {
      const randomCoinArray = this.makeRandomCoinArray(chargeInput.value);
      this.model.chargeVending(chargeInput.value, randomCoinArray);
      this.initElements();
    }
  }

  initTable() {
    const vending = this.model.getVending();
    if (vending) {
      this.view.initVendingTable(vending.coins);
    }
  }

  initElements() {
    const vending = this.model.getVending();
    this.view.clearInput($(SELECTOR.vendingChargeInput));
    if (vending || vending === 0) {
      this.view.setInnerHTML($(SELECTOR.vendingChargeAmount), this.model.getVending().price);
    }
    this.initTable();
  }

  makeRandomCoinArray(chargeInputValue) {
    let totalPrice = 0;
    let randomCoinArray = COIN_ARRAY.map(x => x * 0);
    while (totalPrice < chargeInputValue) {
      const random = MissionUtils.Random.pickNumberInList(COIN_ARRAY);
      if (totalPrice + random <= chargeInputValue) {
        totalPrice += random;
        randomCoinArray[COIN_ARRAY.indexOf(random)] += 1;
      }
    }

    return randomCoinArray;
  }
}
