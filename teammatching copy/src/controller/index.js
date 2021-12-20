import { SELECTOR } from '../constants/constants.js';
import { $ } from './utils.js';
import CrewTab from './crewTab.js';
import TeamTab from './teamTab.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.crewTab = new CrewTab(this.view, this.model);
    this.teamTab = new TeamTab(this.view, this.model);
  }

  addEventListeners() {
    $(SELECTOR.crewTab).addEventListener('click', () => this.renderCrewTab());
    $(SELECTOR.teamTab).addEventListener('click', () => this.renderTeamTab());
  }

  renderCrewTab() {
    this.view.renderCrewTab();
    this.crewTab.init();
  }

  renderTeamTab() {
    this.view.renderTeamTab();
    this.teamTab.init();
  }
}
