import { SELECTOR } from '../model/constants.js';
import { $ } from '../controller/utils.js';
import {
  header,
  stationTab,
  lineTab,
  sectionTab,
  sectionLineContents,
  printTab,
} from '../model/template.js';

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
  showSectionTab() {
    this.clearContainer();
    $('container').insertAdjacentHTML('afterbegin', sectionTab);
  }
  showPrintTab() {
    this.clearContainer();
  }

  showSectionMenus(lines) {
    lines.forEach(line => {
      const button = document.createElement('button');
      button.classList = SELECTOR.sectionLineButton;
      button.innerHTML = line.name;
      button.dataset.line = line.name;
      $('section-lines').appendChild(button);
    });
  }

  showMap(lines) {
    const container = $('container');
    lines.forEach(line => {
      const title = document.createElement('h2');
      const ul = line.stations.map(x => {
        const station = document.createElement('li');
        station.innerHTML = x;
        return station;
      });
      title.innerHTML = line.name;
      container.appendChild(title);
      ul.forEach(li => container.appendChild(li));
    });
  }

  showSectionLineContents(line) {
    $('section-line-contents').innerHTML = '';
    $('section-line-contents').insertAdjacentHTML('afterbegin', sectionLineContents(line));
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
