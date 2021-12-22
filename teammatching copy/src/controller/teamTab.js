import { $ } from './utils.js';
import { SELECTOR, MISSION_OPTIONS, COURSE_OPTIONS } from '../constants/constants.js';

export default class TeamTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addSelectOptions();
    this.addShowMatcherButtonEvent();
  }

  addSelectOptions() {
    this.view.addSelectOptions($(SELECTOR.courseSelect), COURSE_OPTIONS);
    this.view.addSelectOptions($(SELECTOR.missionSelect), MISSION_OPTIONS);
  }

  addShowMatcherButtonEvent() {
    $(SELECTOR.showMatcherButton).addEventListener('click', e => this.showMatcher(e));
  }

  showMatcher(e) {
    e.preventDefault();
    const courseSelectValue = $(SELECTOR.courseSelect).value;
    const missionSelectValue = $(SELECTOR.missionSelect).value;
    const courseName = COURSE_OPTIONS.find(option => option.value === courseSelectValue).name;
    const missionName = MISSION_OPTIONS.find(option => option.value === missionSelectValue).name;
    const { crewList } = this.model.getAllCourse().find(course => course.name === courseName);
    this.view.renderTeamMatchSection(courseName, missionName);
    this.view.renderTeamMatchSectionUL(crewList);
  }
}
