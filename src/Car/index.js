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
}
