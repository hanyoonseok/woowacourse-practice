import { SELECTOR } from '../model/constants.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.addAllEventListener();
  }
  addAllEventListener(){
    $(SELECTOR.tab1).addEventListener('click', () => this.view.drawTab1(this.view));
    $(SELECTOR.tab2).addEventListener('click', () => this.view.drawTab2(this.view));
  }
}