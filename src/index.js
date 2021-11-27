import Inputs from './Inputs/index.js';

export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('submit1');
    this.$tryNumSubmit = document.getElementById('submit2');
    this.$carName = document.getElementById('carName');
    this.$tryNum = document.getElementById('tryNum');
    this.inputs = new Inputs();
    this.addEventListeners();
  }

  addCarNameSubmitEvent() {
    this.$carNameSubmit.addEventListener('click', event => {
      event.preventDefault();
      if (this.inputs.isCarNameValid(this.$carName.value)) {
        this.$carNameSubmit.disabled = true;
      }
    });
  }
  addTryNumSubmitEvent() {
    this.$tryNumSubmit.addEventListener('click', event => {
      event.preventDefault();
      if (this.inputs.isTryNumValid(this.$tryNum.value)) {
        this.$tryNumSubmit.disabled = true;
      }
    });
  }
  addEventListeners() {
    this.addCarNameSubmitEvent();
    this.addTryNumSubmitEvent();
  }
}

new RacingGame();
