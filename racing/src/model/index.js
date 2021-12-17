export class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }
}

export default class Model {
  constructor() {
    this.carObjectArray = [];
    this.racingCount = 0;
  }
  setCarObjectArray(array) {
    this.carObjectArray = array.map(name => new Car(name));
  }
  getCarObjectArray() {
    return this.carObjectArray;
  }
  setRacingCount(racingCount) {
    this.racingCount = parseInt(racingCount);
  }
  sortArrayForWinner() {
    this.carObjectArray.sort((a, b) => b.move - a.move);
  }
  getWinner() {
    const highestMove = this.carObjectArray[0].move;
    return this.carObjectArray.map(car => {
      if (car.move === highestMove) return car.name;
    });
  }
}
