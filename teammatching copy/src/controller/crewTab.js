import { SELECTOR } from '../constants/constants.js';
import { $ } from './utils.js';

export default class CrewTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addRadioEventListener();
  }

  addRadioEventListener() {
    const radioButtons = document.getElementsByName(SELECTOR.crewRadioName);
    radioButtons.forEach(radio => radio.addEventListener('change', () => this.selectCourse()));
  }

  selectCourse() {
    const selectedRadioValue = document.querySelector(
      `input[name=${SELECTOR.crewRadioName}]:checked`,
    ).value; // frontend
    const selectedRadioText = document.querySelector(`label[for=${selectedRadioValue}]`).innerHTML; // 프론트엔드
  }
}
