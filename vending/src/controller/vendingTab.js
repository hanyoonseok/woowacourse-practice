import { $ } from './utils.js';
import { SELECTOR, COIN_ARRAY } from '../constants/constants.js';

export default class VendingTag {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.vendingChargeButton).addEventListener('click', () => this.addVendingCharge());
  }

  addVendingCharge() {
    const chargeInput = $(SELECTOR.vendingChargeInput);
    const randomCoinArray = this.makeRandomCoin(chargeInput.value);
    this.model.chargeVending(chargeInput.value, randomCoinArray);
  }

  makeRandomCoin(chargeInputValue) {
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
