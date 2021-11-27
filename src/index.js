import Inputs from './Inputs/index.js';

export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('submit1');
    this.$tryCountSubmit = document.getElementById('submit2');
    this.$carName = document.getElementById('carName');
    this.$tryCount = document.getElementById('tryCount');
    this.participants = [];
    this.inputs = new Inputs();
    this.addEventListeners();
  }

  getCarNameList() {
    return [];
  }
  addCarNameSubmitEvent() {
    this.$carNameSubmit.addEventListener('click', event => {
      event.preventDefault();
      if (this.inputs.isCarNameValid(this.$carName.value)) {
        this.participants = this.getCarNameList();
      }
    });
  }
  addTryCountSubmitEvent() {}
  addEventListeners() {
    this.addCarNameSubmitEvent();
    this.addTryCountSubmitEvent();
  }
}

new RacingGame();
