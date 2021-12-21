import { $ } from './utils.js';
import { SELECTOR, MISSION_OPTIONS, COURSE_OPTIONS } from '../constants/constants.js';

export default class TeamTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addSelectOptions();
  }

  addSelectOptions() {
    this.view.addSelectOptions($(SELECTOR.courseSelect), COURSE_OPTIONS);
    this.view.addSelectOptions($(SELECTOR.missionSelect), MISSION_OPTIONS);
  }
}
