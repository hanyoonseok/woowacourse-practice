import { $, validation } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class Controller {
  constructor(view, model, baseball) {
    this.view = view;
    this.model = model;
    this.baseball = baseball;
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.submit).addEventListener('click', e => this.playGame(e));
  }

  isUserInputValid(userInput) {
    return (
      !validation.isBlankExist(userInput) &&
      validation.isRightLength(userInput) &&
      validation.isNumeric(userInput) &&
      !validation.isDuplicated(userInput)
    );
  }

  renderResult(resultMessage) {
    this.view.renderResult(resultMessage);
    if (this.model.getStrike() === 3) {
      this.view.renderRestart();
      this.addRestartEvent();
    }
  }

  playGame(e) {
    e.preventDefault();
    const userInput = $(SELECTOR.userInput).value;
    this.model.setUserInput(userInput);
    this.model.clearBallAndStrike();
    if (this.isUserInputValid(userInput)) {
      const resultMessage = this.baseball.play(
        this.model.getRandomNumber(),
        this.model.getUserInput(),
      );
      this.renderResult(resultMessage);
      return;
    }
    this.view.clearInput($(SELECTOR.userInput));
  }

  increaseBallAndStrike(randomNumber, userInput) {
    randomNumber.forEach((number, i) => {
      if (userInput.includes(number) && userInput[i] !== number) {
        this.model.increaseBall();
      } else if (userInput.includes(number) && userInput[i] === number) {
        this.model.increaseStrike();
      }
    });
  }

  makeMessage(message) {
    if (this.model.getStrike() > 0) {
      message += `${this.model.getStrike()}스트라이크 `;
    }
    if (this.model.getBall() > 0) {
      message += `${this.model.getBall()}볼`;
    }
    if (this.model.getStrike() === 3) {
      message = '축하합니다. 정답을 맞추셨습니다.';
    } else if (this.model.getBall() === 0 && this.model.getStrike() === 0) {
      message = '낫싱';
    }

    return message;
  }

  makeResultMessage(randomNumber, userInput) {
    let message = '';
    this.increaseBallAndStrike(randomNumber, userInput);

    return this.makeMessage(message);
  }

  addRestartEvent() {
    $(SELECTOR.restartButton).addEventListener('click', () => this.restartGame());
  }

  restartGame() {
    this.view.clearInput($(SELECTOR.userInput));
    this.model.clearAllInfo();
    this.view.clearRestart();
  }
}
