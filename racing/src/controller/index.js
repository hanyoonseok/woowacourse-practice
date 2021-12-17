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

  isCarNamesInputValid(carNamesInputValue){
     
  }

  setCarList(e) {
    e.preventDefault();
    const carNamesInput = $(SELECTOR.carNameInput);
    if (this.isCarNamesInputValid(carNamesInput.value)) {
        
    }
  }
}
