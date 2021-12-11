import { $ } from '../controller/utils.js';
import { addTab1EventListener } from '../controller/tab1.js';
import { addTab2EventListener } from '../controller/tab2.js';
import { tabMenus, tab1, tab2 } from '../dom.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.$app.insertAdjacentHTML('afterbegin', tabMenus);
    this.drawTab1();
  }

  clearContainer() {
    $('container').innerHTML = '';
  }
  drawTab1() {
    this.clearContainer();
    const $container = $('container');
    $container.insertAdjacentHTML('afterbegin', tab1);
    addTab1EventListener(this);
  }
  drawTab2() {
    this.clearContainer();
    const $container = $('container');
    $container.insertAdjacentHTML('afterbegin', tab2);
    addTab2EventListener(this);
  }
  addTableRow(table, data) {
    const tr = document.createElement('tr');
    data.forEach(x => {
      const td= document.createElement('td');
      td.innerHTML = x;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  }
}
