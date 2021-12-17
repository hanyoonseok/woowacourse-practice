import { GAME_RULE } from '../constants/constants.js';

export default class Model {
  constructor() {
    this.randomNumber = this.makeRandomNumber();
    this.userInput = [];
    this.ball = 0;
    this.strike = 0;
  }

  makeRandomNumber() {
    let randomNumberArray = [];
    while (randomNumberArray.length < GAME_RULE.numberLength) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        GAME_RULE.minRange,
        GAME_RULE.maxRange,
      );
      if (!randomNumberArray.includes(randomNumber)) {
        randomNumberArray.push(randomNumber);
      }
    }

    return randomNumberArray;
  }

  getRandomNumber() {
    return this.randomNumber;
  }

  setUserInput(userInput) {
    this.userInput = userInput.split('').map(x => parseInt(x));
  }

  getUserInput() {
    return this.userInput;
  }

  increaseBall() {
    this.ball += 1;
  }

  increaseStrike() {
    this.strike += 1;
  }

  getBall() {
    return this.ball;
  }

  getStrike() {
    return this.strike;
  }

  clearBallAndStrike() {
    this.ball = GAME_RULE.nothingCount;
    this.strike = GAME_RULE.nothingCount;
  }

  clearAllInfo() {
    this.ball = GAME_RULE.nothingCount;
    this.strike = GAME_RULE.nothingCount;
    this.randomNumber = this.makeRandomNumber();
    this.userInput = [];
  }
}
