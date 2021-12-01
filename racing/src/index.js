import Inputs from './input/index.js';
import { addCarNameSubmitEvent, addTryNumSubmitEvent } from './utils/submitEvents.js';

export default class RacingGame {
  constructor() {
    this.inputs = new Inputs();
    this.addEventListeners();
  }

  addEventListeners() {
    addCarNameSubmitEvent(this.inputs);
    addTryNumSubmitEvent(this.inputs);
  }
}

new RacingGame();
