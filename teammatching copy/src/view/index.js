import { SELECTOR } from '../constants/constants.js';
import { $ } from '../controller/utils.js';
import {
  commonHeader,
  crewCourseSection,
  crewManageSection,
  teamSelectSection,
  teamMatchSection,
  teamMatchResultSection,
} from '../constants/template.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
    this.renderCommonHeader();
    this.$container = $(SELECTOR.container);
  }

  clearInput(input) {
    input.value = '';
  }

  getTable() {
    return document.querySelector('table');
  }

  clearTable(table) {
    table.innerHTML = '';
  }

  addTableHeader(table, headerForm) {
    table.insertAdjacentHTML('beforeend', headerForm);
  }

  addTableRow(table, rowForm) {
    table.insertAdjacentHTML('beforeend', rowForm);
  }

  clearInnerHTML(element) {
    element.innerHTML = '';
  }

  renderCommonHeader() {
    this.$app.insertAdjacentHTML('afterbegin', commonHeader);
  }

  renderCrewTab() {
    this.clearInnerHTML(this.$container);
    this.$container.insertAdjacentHTML('afterbegin', crewCourseSection);
  }

  renderTeamTab() {
    this.clearInnerHTML(this.$container);
    this.$container.insertAdjacentHTML('afterbegin', teamSelectSection);
  }

  renderCrewManageSection(course) {
    this.clearInnerHTML($(SELECTOR.crewManageSection));
    $(SELECTOR.crewManageSection).insertAdjacentHTML('beforeend', crewManageSection(course));
  }

  renderTeamMatchSection(course, mission) {
    this.clearInnerHTML($(SELECTOR.teamResultSection));
    $(SELECTOR.teamResultSection).insertAdjacentHTML(
      'beforeend',
      teamMatchSection(course, mission),
    );
  }

  renderTeamMatchSectionUL(crewList) {
    crewList.forEach(crew => {
      const liTag = document.createElement('li');
      liTag.innerHTML = crew;
      $(SELECTOR.teamMatchUL).appendChild(liTag);
    });
  }

  renderTeamMatchResultSection(course, mission) {
    this.clearInnerHTML($(SELECTOR.teamResultSection));
    $(SELECTOR.teamResultSection).insertAdjacentHTML(
      'beforeend',
      teamMatchResultSection(course, mission),
    );
  }

  renderTeamMatchResultSectionUL(missionCrewList) {
    missionCrewList.forEach(crew => {
      const liTag = document.createElement('li');
      liTag.innerHTML = crew.join(',');
      $(SELECTOR.matchResultUL).appendChild(liTag);
    });
  }

  addSelectOptions(select, options) {
    options.forEach(option => {
      const optionTag = document.createElement('option');
      optionTag.value = option.value;
      optionTag.innerHTML = option.name;
      select.appendChild(optionTag);
    });
  }
}
