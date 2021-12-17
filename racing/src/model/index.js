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
    console.log(this.carObjectArray)
  }
}
