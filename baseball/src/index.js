import Computer from './computer/index.js';
import User from './user/index.js';
import { $ } from './utils/index.js';
import { showResult } from './gameResult.js';

export default class BaseballGame {
  constructor() {
    this.$userInput = $('user-input');
    this.$submit = $('submit');
    this.addSubmitEvent();
    this.computer = new Computer();
    this.user = new User();
  }
  play(computerInputNumbers, userInputNumbers) {
    this.user.setBallStrike(computerInputNumbers, userInputNumbers);
    const resultMessage = this.user.makeHint();

    return resultMessage;
  }

  onSubmitClick(event) {
    event.preventDefault();
    if (this.user.isUserInputValid()) {
      this.user.initUser();
      this.user.setNumber(this.$userInput.value);
      const resultMessage = this.play(this.computer.getNumber(), this.user.getNumber());
      showResult(resultMessage, this.user, this.computer);
    } else {
      this.$userInput.value = '';
    }
  }

  addSubmitEvent() {
    this.$submit.addEventListener('click', event => this.onSubmitClick(event));
  }
}

new BaseballGame();
