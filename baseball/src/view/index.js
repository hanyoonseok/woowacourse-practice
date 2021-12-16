import { SELECTOR } from '../constants/constants.js';
import { $ } from '../controller/utils.js';

export default class View {
  clearInput(input) {
    input.value = '';
  }
  renderResult(resultMessage, strike) {
    $(SELECTOR.result).innerHTML = resultMessage;
  }
  renderRestart() {
    const div = document.createElement('div');
    const button = document.createElement('button');
    div.innerHTML = '게임을 새로 시작하시겠습니까?';
    button.id = SELECTOR.restartButton;
    button.innerHTML = '게임 재시작';
    div.appendChild(button);
    $(SELECTOR.result).appendChild(div);
  }

  clearRestart() {
    $(SELECTOR.result).innerHTML = '';
  }
}
