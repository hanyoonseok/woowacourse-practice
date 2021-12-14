import { SELECTOR } from '../model/constants.js';
import { $, validation } from './utils.js';
import { stationTableRow, stationTableHeader } from '../model/template.js';

export default class StationTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.init();
  }
  init() {
    this.addEventListeners();
    this.initTable();
  }

  addEventListeners() {
    $(SELECTOR.stationAddButton).addEventListener('click', () => this.addStation());
  }

  addStation() {
    const station = $(SELECTOR.stationNameInput);
    if (this.isStationNameValid(station)) {
      this.model.addStation(station.value);
      this.initTable();
      this.initAllDeleteButtonEvent();
      this.view.clearInput(station)
    }
  }

  isStationNameValid(name) {
    return !validation.isBlankExist(name);
  }

  initTable() {
    const table = document.querySelector('tbody');
    const allStations = this.model.getStations();
    this.view.clearTable(table);
    this.view.addTableHeader(table, stationTableHeader);
    allStations.forEach(station => this.view.addTableRow(table, stationTableRow(station)));
    this.initAllDeleteButtonEvent();
  }

  initAllDeleteButtonEvent() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.stationDeleteButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.deleteStation(button)),
    );
  }

  deleteStation(button) {
    this.model.deleteStation(button.dataset.station);
    this.initTable();
  }
}
