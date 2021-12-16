export default class Model {
  constructor() {
    this.randomNumber = this.makeRandomNumber();
    this.userInput = [];
    this.ball = 0;
    this.strike = 0;
  }

  makeRandomNumber() {
    let randomNumberArray = [];
    while (randomNumberArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
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
    this.ball = 0;
    this.strike = 0;
  }

  clearAllInfo() {
    this.ball = 0;
    this.strike = 0;
    this.randomNumber = this.makeRandomNumber();
    this.userInput = [];
  }
}
