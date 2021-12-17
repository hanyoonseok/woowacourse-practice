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
    const winnerObjectArray = this.carObjectArray.filter(car => car.move === highestMove);
    console.log(winnerObjectArray)

    return winnerObjectArray.map(obj => obj.name);
  }
}
