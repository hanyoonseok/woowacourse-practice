import { $ } from '../controller/utils.js';
import { header, stationTab, lineTab } from '../model/template.js';

export default class View {
  constructor() {
    this.$app = $('app');
    this.showHeader();
    this.showStationTab();
  }

  showHeader() {
    this.$app.insertAdjacentHTML('beforeend', header);
  }

  clearContainer() {
    $('container').innerHTML = '';
  }
  showStationTab() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', stationTab);
  }
  showLineTab() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', lineTab);
  }

  addTableHeader(table, headerForm) {
    table.insertAdjacentHTML('beforeend', headerForm);
  }

  addTableRow(table, rowForm) {
    table.insertAdjacentHTML('beforeend', rowForm);
  }

  setInnerHTML(target, value) {
    target.innerHTML = value;
  }

  clearInput(input) {
    input.value = '';
  }

  clearTable(table) {
    table.innerHTML = '';
  }
  addOptions(select, value) {
    value.forEach(option => {
      const optionTag = document.createElement('option');
      optionTag.innerHTML = option;
      select.appendChild(optionTag);
    });
  }
}
