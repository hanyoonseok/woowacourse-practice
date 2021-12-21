import { SELECTOR } from '../constants/constants.js';
import { $ } from '../controller/utils.js';
import { commonHeader, crewCourseSection, crewManageSection } from '../constants/template.js';

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

  renderTeamTab() {}

  renderCrewManageSection(course) {
    this.clearInnerHTML($(SELECTOR.crewManageSection));
    $(SELECTOR.crewManageSection).insertAdjacentHTML('beforeend', crewManageSection(course));
  }
}
