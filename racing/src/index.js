import Inputs from './Inputs/index.js';
import { addCarNameSubmitEvent, addTryNumSubmitEvent } from './utils/submitEvents.js';

export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('car-names-submit');
    this.$tryNumSubmit = document.getElementById('racing-count-submit');
    this.$carName = document.getElementById('car-names-input');
    this.$tryNum = document.getElementById('racing-count-input');
    this.$result = document.getElementById('result');
    this.inputs = new Inputs();
    this.addEventListeners();
  }

  addEventListeners() {
    addCarNameSubmitEvent(this.$carName, this.$carNameSubmit, this.inputs);
    addTryNumSubmitEvent(this.$tryNumSubmit, this.inputs, this.$tryNum, this.$result);
  }
}

new RacingGame();
