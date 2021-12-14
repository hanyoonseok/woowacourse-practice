import { $ } from '../../../vending/src/controller/utils.js';
import { SELECTOR } from '../model/constants.js';
import { sectionTableHeader, sectionTableRow } from '../model/template.js';
import { onKeyUpNumericEvent } from './utils.js';

export default class SectionTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    const lines = this.model.getLines();
    this.view.showSectionMenus(lines);
    this.addEventListeners();
  }

  addEventListeners() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.sectionLineButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.handleLineButton(button)),
    );
  }

  handleLineButton(button) {
    const line = this.model.getLines().find(e => e.name === button.dataset.line);
    this.view.showSectionLineContents(line);
    this.initSelect();
    this.initTable(line);
    this.addContentsEventListeners();
  }

  addContentsEventListeners() {
    $(SELECTOR.sectionAddButton).addEventListener('click', () =>
      this.addSection($(SELECTOR.sectionAddButton).dataset.line),
    );
    $(SELECTOR.sectionOrderInput).addEventListener('keyup', () =>
      onKeyUpNumericEvent($(SELECTOR.sectionOrderInput)),
    );
  }

  addSection(line) {
    const station = $(SELECTOR.sectionStationSelect).value;
    const order = $(SELECTOR.sectionOrderInput);
    this.model.addStationInOrder(station, order.value, line);
    this.initTable(this.model.getLines().find(e => e.name === line));
    this.view.clearInput(order);
  }

  initSelect() {
    const select = $(SELECTOR.sectionStationSelect);
    const stations = this.model.getStations();
    this.view.addOptions(select, stations);
  }

  initTable(line) {
    const table = document.querySelector('tbody');
    const stations = line.stations;
    this.view.clearTable(table);
    this.view.addTableHeader(table, sectionTableHeader);
    stations.forEach((station, i) => this.view.addTableRow(table, sectionTableRow(station, i)));
    this.initAllSectionDeleteButton(line);
  }

  initAllSectionDeleteButton(line) {
    const buttons = document.querySelectorAll(`.${SELECTOR.sectionDeleteButton}`);
    buttons.forEach(button =>
      button.addEventListener('click', () => this.deleteSection(line, button.dataset.station)),
    );
  }

  deleteSection(line, station) {
    this.model.deleteStationInLine(line, station);
    this.initTable(this.model.getLines().find(e => e.name === line.name));
  }
}
