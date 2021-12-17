import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/index.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.$app);
    this.init();
  }

  init() {
    this.blockElement($(SELECTOR.racingCountSubmit));
    this.blockElement($(SELECTOR.racingCountInput));
  }
  blockElement(element) {
    element.disabled = true;
  }
  unblockElement(element) {
    element.disabled = false;
  }
  createDivTag() {
    return document.createElement('div');
  }

  showResult(carObjectArray) {
    carObjectArray.forEach(car => {
      const divTag = this.createDivTag();
      let resultMessage = `${car.name}: `;
      for (let i = 0; i < car.move; i += 1) {
        resultMessage += '-';
      }
      divTag.innerHTML = resultMessage;
      this.$app.appendChild(divTag);
    });
    this.$app.appendChild(document.createElement('br'));
  }

  showWinner(winnerArray) {
    const divTag = this.createDivTag();
    const spanTag = document.createElement('span');
    spanTag.id = SELECTOR.racingWinner;
    divTag.innerHTML = '최종 우승자: ';
    spanTag.innerHTML = winnerArray.join(',');
    divTag.appendChild(spanTag);
    this.$app.appendChild(divTag);
  }
}
