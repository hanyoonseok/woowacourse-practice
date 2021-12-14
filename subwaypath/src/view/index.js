import { $ } from '../utils/index.js';
import { template, resultComponent } from '../model/template.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.showView();
  }

  showView() {
    this.$app.insertAdjacentHTML('afterbegin', template);
  }
  showResult(result, info) {
    $('result').innerHTML = '';
    $('result').insertAdjacentHTML('afterbegin', resultComponent(result, info));
  }
}
