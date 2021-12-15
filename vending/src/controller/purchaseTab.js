import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class PurchaseTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.chargeButton).addEventListener('click', () => this.chargeMoney());
    $(SELECTOR.returnButton).addEventListener('click', () => returnMoney());
  }

  chargeMoney() {
    const chargeInput = $(SELECTOR.chargeInput);
    this.model.addCharge(chargeInput);
  }

  returnMoney() {}
}
