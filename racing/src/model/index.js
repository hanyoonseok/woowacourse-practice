export class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }
}

export default class Model {
  constructor() {
    this.carNamesArray = [];
    this.racingCount = 0;
  }
}
