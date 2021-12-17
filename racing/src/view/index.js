import { $ } from '../controller/utils.js';
import { SELECTOR } from '../constants/index.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.$app);
  }
  blockButton(button) {
    button.disabled = true;
  }
  unblockButton(button) {
    button.disabled = false;
  }

  showResult(carObjectArray) {
    carObjectArray.forEach(car => {
      const divTag = document.createElement('div');
      let resultMessage = `${car.name}: `;
      for (let i = 0; i < car.move; i += 1) {
        resultMessage += '-';
      }
      divTag.innerHTML = resultMessage;
      this.$app.appendChild(divTag);
    });
    this.$app.appendChild(document.createElement('br'));
  }
}
