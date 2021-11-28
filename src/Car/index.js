import { GAME_RULE } from '../constants/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }
  printStatus() {
    let message = `${this.name}: `;
    let i;
    for (i = 0; i < this.move; i += 1) {
      message += '-';
    }

    return message;
  }
  makeRandomNumber() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      GAME_RULE.rangeMin,
      GAME_RULE.rangeMax,
    );

    return randomNumber;
  }
  moveCar() {
    if (this.makeRandomNumber() >= 4) {
      this.move++;
    }
  }
}
