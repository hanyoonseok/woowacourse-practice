import Computer from './Computer/index.js';
import User from './User/index.js';
import { makeResultMessage, gameResult } from './utils/index.js';

export default class BaseballGame {
  constructor() {
    this.$userInput = document.getElementById('user-input');
    this.$submit = document.getElementById('submit');
    this.addEventListeners();
    this.computer = new Computer();
    this.user = new User();
  }
  play(computerInputNumbers, userInputNumbers) {
    const resultMessage = makeResultMessage(computerInputNumbers, userInputNumbers, this.user);

    return resultMessage;
  }

  onSubmitClick(event) {
    event.preventDefault();
    if (this.user.isUserInputValid()) {
      this.user.initUser();
      this.user.number = this.$userInput.value;
      const resultMessage = this.play(this.computer.number, this.user.number);
      gameResult(resultMessage, this.user, this.computer);
    } else {
      this.$userInput.value = '';
    }
  }
  
  addEventListeners() {
    this.$submit.addEventListener('click', event => this.onSubmitClick(event));
  }
}

new BaseballGame();
