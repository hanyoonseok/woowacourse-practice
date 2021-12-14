import { SELECTOR } from '../model/constants.js';
import { $, validation } from './utils.js';
import { lineTableHeader, lineTableRow } from '../model/template.js';

export default class LineTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  init() {
    this.addEventListeners();
    this.initStations();
    this.initTable();
  }
  addEventListeners() {
    $(SELECTOR.lineAddButton).addEventListener('click', () => this.addLine());
  }

  initTable() {
    const table = document.querySelector('tbody');
    const allLines = this.model.getLines();
    this.view.clearTable(table);
    this.view.addTableHeader(table, lineTableHeader);
    allLines.forEach(line => this.view.addTableRow(table, lineTableRow(line)));
    this.initAllLineDeleteButton();
  }

  initStations() {
    const lineStartSelect = $(SELECTOR.lineStartSelect);
    const lineEndSelect = $(SELECTOR.lineEndSelect);
    const stations = this.model.getStations();
    this.view.addOptions(lineStartSelect, stations);
    this.view.addOptions(lineEndSelect, stations);
  }

  isLineNameValid(lineName) {
    return !validation.isBlankExist(lineName);
  }

  addLine() {
    const lineName = $(SELECTOR.lineNameInput);
    const startSelect = $(SELECTOR.lineStartSelect);
    const endSelect = $(SELECTOR.lineEndSelect);
    if (this.isLineNameValid(lineName)) {
      const line = this.model.makeLine(lineName.value, startSelect.value, endSelect.value);
      this.model.addLine(line);
      this.initLineDom();
      this.initTable();
    }
  }

  initLineDom() {
    const lineName = $(SELECTOR.lineNameInput);
    this.view.clearInput(lineName);
  }

  initAllLineDeleteButton() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.lineDeleteButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.deleteLine(button.dataset.line)),
    );
  }

  deleteLine(line) {
    this.model.deleteLine(line);
    this.initTable();
  }
}
