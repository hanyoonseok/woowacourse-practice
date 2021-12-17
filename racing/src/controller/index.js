import { $, validation } from './utils.js';
import { SELECTOR } from '../constants/index.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.addEventListeners();
  }
  addEventListeners() {
    $(SELECTOR.carNameSubmit).addEventListener('click', e => this.setCarList(e));
  }

  isCarNamesInputValid(carNamesInputArray) {
    return (
      validation.isNameInLength(carNamesInputArray) &&
      !validation.isDuplicatedNameExist(carNamesInputArray) &&
      !validation.isBlankExist(carNamesInputArray)
    );
  }

  setCarList(e) {
    e.preventDefault();
    const carNamesInputArray = $(SELECTOR.carNameInput).value.split(',');
    if (this.isCarNamesInputValid(carNamesInputArray)) {
    }
  }
}
