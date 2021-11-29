import Inputs from './Inputs/index.js';
import { addCarNameSubmitEvent, addTryNumSubmitEvent } from './utils/submitEvents.js';

export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('submit1');
    this.$tryNumSubmit = document.getElementById('submit2');
    this.$carName = document.getElementById('carName');
    this.$tryNum = document.getElementById('tryNum');
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
