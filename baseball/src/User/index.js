import { GAME_RULE, MESSAGES } from '../constants/index.js';

export default class User {
  constructor() {
    this.number = 0;
    this.strikeNum = 0;
    this.ballNum = 0;
    this.$userInput = document.getElementById('user-input');
  }
  initUser() {
    this.number = 0;
    this.strikeNum = 0;
    this.ballNum = 0;
  }
  isNumeric(userInput) {
    let i;
    let isValid = true;

    for (i = 0; i < userInput.length; i++) {
      if (isNaN(userInput[i])) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }
  isInLength(userInput) {
    return userInput.length === GAME_RULE.numberLength;
  }
  isOutOfRange(userInput) {
    return userInput.includes(0);
  }
  isDuplicated(userInput) {
    const userInputArray = userInput.split('');
    const userInputSet = [...new Set(userInputArray)];

    return !(userInputArray.length === userInputSet.length);
  }
  isUserInputValid() {
    const userInput = this.$userInput.value;
    let isValid = false;
    if (!this.isNumeric(userInput)) {
      alert('숫자가 아닌 문자가 포함되어 있습니다');
    } else if (!this.isInLength(userInput)) {
      alert('3자리 수를 입력해주세요');
    } else if (this.isOutOfRange(userInput)) {
      alert('1부터 9사이의 수를 입력해주세요');
    } else if (this.isDuplicated(userInput)) {
      alert('중복된 수가 존재합니다. 다시 입력해주세요');
    } else {
      isValid = true;
    }

    return isValid;
  }
  setBallStrike(computerInputNumbers, userInputNumbers) {
    let i;
    for (i = 0; i < userInputNumbers.length; i += 1) {
      if (
        computerInputNumbers.includes(userInputNumbers[i]) &&
        computerInputNumbers[i] === userInputNumbers[i]
      ) {
        this.strikeNum++;
      } else if (
        computerInputNumbers.includes(userInputNumbers[i]) &&
        computerInputNumbers[i] !== userInputNumbers[i]
      ) {
        this.ballNum++;
      }
    }
  }
  makeText() {
    let resultMessage = '';
    if (this.ballNum > 0) {
      resultMessage += `${this.ballNum}볼 `;
    }
    if (this.strikeNum > 0) {
      resultMessage += `${this.strikeNum}스트라이크`;
    }
    if (this.strikeNum === 3) {
      resultMessage = MESSAGES.clear;
    } else if (this.strikeNum === 0 && this.ballNum === 0) {
      resultMessage = MESSAGES.nothing;
    }

    return resultMessage;
  }
}
