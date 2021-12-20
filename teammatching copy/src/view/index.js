import { SELECTOR } from '../constants/constants.js';
import { $ } from '../controller/utils.js';
import { commonHeader, crewCourseSection, crewManageSection } from '../constants/template.js';

export default class View {
  constructor() {
    this.$app = $(SELECTOR.app);
    this.renderCommonHeader();
    this.$container = $(SELECTOR.container);
  }

  clearContainer() {
    this.$container.innerHTML = '';
  }

  renderCommonHeader() {
    this.$app.insertAdjacentHTML('afterbegin', commonHeader);
  }

  renderCrewTab() {
    this.clearContainer();
    this.$container.insertAdjacentHTML('afterbegin', crewCourseSection);
  }

  renderTeamTab() {}
}
