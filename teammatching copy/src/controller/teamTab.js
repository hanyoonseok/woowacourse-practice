import { $, validation, onKeyUpOnlyNumberRegex } from './utils.js';
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

  handleTeamMatchSection(courseName, missionName, crewList) {
    this.view.renderTeamMatchSection(courseName, missionName);
    this.view.renderTeamMatchSectionUL(crewList);
    this.addTeamMatchEvent();
  }

  handleTeamMatchResultSection(courseName, missionName, missionCrewList) {
    this.view.renderTeamMatchResultSection(courseName, missionName);
    this.view.renderTeamMatchResultSectionUL(missionCrewList);
    this.addRematchButtonEvent();
  }

  showMatcher(e) {
    e.preventDefault();
    const courseSelectValue = $(SELECTOR.courseSelect).value;
    const missionSelectValue = $(SELECTOR.missionSelect).value;
    const courseName = COURSE_OPTIONS.find(option => option.value === courseSelectValue).name;
    const missionName = MISSION_OPTIONS.find(option => option.value === missionSelectValue).name;
    const { crewList } = this.model.getAllCourse().find(course => course.name === courseName);
    const missionCrewList = this.model
      .getAllMission()
      .find(mission => mission.course === courseName && mission.mission === missionName).crewList;
    if (missionCrewList.length === 0) {
      this.handleTeamMatchSection(courseName, missionName, crewList);
    } else {
      this.handleTeamMatchResultSection(courseName, missionName, missionCrewList);
    }
  }

  addTeamMatchEvent() {
    $(SELECTOR.teamMatchButton).addEventListener('click', e => this.matchTeamByCount(e));
    $(SELECTOR.memberCountInput).addEventListener('keyup', () =>
      onKeyUpOnlyNumberRegex($(SELECTOR.memberCountInput)),
    );
  }

  addRematchButtonEvent() {
    $(SELECTOR.rematchButton).addEventListener('click', e => this.rematchTeam(e));
  }

  rematchTeam(e) {
    e.preventDefault();
    const courseName = this.model.getCourseName($(SELECTOR.courseSelect).value);
    const missionName = this.model.getMissionName($(SELECTOR.missionSelect).value);
    const allMission = this.model.getAllMission();
    const allCrewList = this.model
      .getAllCourse()
      .find(course => course.name === courseName).crewList;
    allMission.find(
      mission => mission.mission === missionName && mission.course === courseName,
    ).crewList = [];
    this.model.setAllMission(allMission);
    this.handleTeamMatchSection(courseName, missionName, allCrewList);
  }

  matchTeamByCount(e) {
    e.preventDefault();
    const memberCount = $(SELECTOR.memberCountInput).value;
    const courseName = this.model.getCourseName($(SELECTOR.courseSelect).value);
    const missionName = this.model.getMissionName($(SELECTOR.missionSelect).value);
    const allCrewList = this.model
      .getAllCourse()
      .find(course => course.name === courseName).crewList;
    if (validation.isCountValid(memberCount, allCrewList.length)) {
      const allMission = this.model.getAllMission();
      const selectedMission = allMission.find(
        mission => mission.course === courseName && mission.mission === missionName,
      );
      const matchedCrewList = this.pickCrewByCount(memberCount, allCrewList);
      selectedMission.crewList = matchedCrewList;
      this.model.setAllMission(allMission);
      this.handleTeamMatchResultSection(courseName, missionName, matchedCrewList);
    }
  }

  pickCrewByCount(count, allCrewList) {
    console.log(allCrewList);
    const randomOrderArray = MissionUtils.Random.shuffle(allCrewList.map((e, i) => i));
    const matchedCrewList = [];
    while (randomOrderArray.length > 0) {
      if (randomOrderArray.length - count < 0) {
        const restLength = randomOrderArray.length;
        let index = 0;
        for (let i = 0; i < restLength; i += 1) {
          if (index === matchedCrewList.length) {
            index = 0;
          }
          matchedCrewList[index].push(allCrewList[randomOrderArray[0]]);
          randomOrderArray.shift();
          index += 1;
        }
      } else {
        const oneTeam = [];
        for (let i = 0; i < count; i += 1) {
          oneTeam.push(allCrewList[randomOrderArray[0]]);
          randomOrderArray.shift();
        }
        matchedCrewList.push(oneTeam);
      }
    }

    return matchedCrewList;
  }
}
