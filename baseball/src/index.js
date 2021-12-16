import Controller from './controller/index.js';
import View from './view/index.js';
import Model from './model/index.js';

export default class BaseballGame {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.controller = new Controller(this.view, this.model, this);
  }
  play(computerInputNumbers, userInputNumbers) {
    return this.controller.makeResultMessage(computerInputNumbers, userInputNumbers);
  }
}

new BaseballGame();
