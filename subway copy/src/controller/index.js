import Model from '../model/index.js';
import StationTab from './stationTab.js';
import LineTab from './lineTab.js';
import SectionTab from './sectionTab.js';
import PrintTab from './printTab.js';
import { SELECTOR } from '../model/constants.js';
import { $ } from './utils.js';

export default class Controller {
  constructor(view) {
    this.view = view;
    this.model = new Model();
    this.stationTab = new StationTab(this.view, this.model);
    this.lineTab = new LineTab(this.view, this.model);
    this.sectionTab = new SectionTab(this.view, this.model);
    this.printTab = new PrintTab(this.view, this.model);
  }

  addEventListeners() {
    $(SELECTOR.stationMenu).addEventListener('click', () => this.callStationTab());
    $(SELECTOR.lineMenu).addEventListener('click', () => this.callLineTab());
    $(SELECTOR.sectionMenu).addEventListener('click', () => this.callSectionTab());
    $(SELECTOR.printMenu).addEventListener('click', () => this.callPrintTab());
  }
  callStationTab() {
    this.view.showStationTab();
    this.stationTab.init();
  }

  callLineTab() {
    this.view.showLineTab();
    this.lineTab.init();
  }
  callSectionTab() {
    this.view.showSectionTab();
    this.sectionTab.init();
  }
  callPrintTab() {
    this.view.showPrintTab();
    this.printTab.init();
  }
}
