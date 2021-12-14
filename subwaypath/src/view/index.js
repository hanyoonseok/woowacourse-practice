import { $ } from '../utils/index.js';
import { template } from '../model/template.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.showView();
  }

  showView() {
    this.$app.insertAdjacentHTML('afterbegin', template);
  }
}
