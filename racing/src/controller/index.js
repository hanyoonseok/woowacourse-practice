import { $, validation, onKeyUpNumericEvent } from './utils.js';
import { SELECTOR } from '../constants/index.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.addEventListeners();
  }
  addEventListeners() {
    $(SELECTOR.carNameSubmit).addEventListener('click', e => this.setCarList(e));
    $(SELECTOR.racingCountSubmit).addEventListener('click', e => this.setRacingCount(e));
    $(SELECTOR.racingCountInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.racingCountInput)),
    );
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
      this.model.setCarObjectArray(carNamesInputArray);
    }
  }

  isRacingCountValid(racingCount) {
      return validation.isPositiveNumber(racingCount) && !validation.isBlankExist(racingCount);
  }

  setRacingCount(e) {
    e.preventDefault();
    const racingCount = $(SELECTOR.racingCountInput).value;
    if (this.isRacingCountValid(racingCount)) {
    }
  }
}
