import { MISSION_OPTIONS, COURSE_OPTIONS } from '../constants/constants.js';

export default class Model {
  constructor() {
    this.makeCourse('프론트엔드');
    this.makeCourse('백엔드');
    this.initMission('프론트엔드');
    this.initMission('백엔드');
    this.selectedCourse = '';
  }

  getCourseName(value) {
    return COURSE_OPTIONS.find(option => option.value === value).name;
  }

  getMissionName(value) {
    return MISSION_OPTIONS.find(option => option.value === value).name;
  }

  makeCourse(course) {
    const allCourse = this.getAllCourse();
    if (!allCourse.find(e => e.name === course)) {
      const newCourse = {
        name: course,
        crewList: [],
      };
      allCourse.push(newCourse);
      this.setAllCourse(allCourse);
    }
  }

  setAllCourse(allCourse) {
    localStorage.setItem('course', JSON.stringify(allCourse));
  }

  setSelectedCourse(course) {
    this.selectedCourse = course;
  }

  getSelectedCourse() {
    return this.selectedCourse;
  }

  getAllCourse() {
    return JSON.parse(localStorage.getItem('course')) || [];
  }

  getAllMission() {
    return JSON.parse(localStorage.getItem('mission')) || [];
  }

  setAllMission(allMission) {
    localStorage.setItem('mission', JSON.stringify(allMission));
  }

  getCourseCrewList(course) {
    return this.getAllCourse().find(one => one.name === course).crewList;
  }

  initMission(course) {
    const allMission = this.getAllMission();
    if (!allMission.find(e => e.course === course)) {
      MISSION_OPTIONS.forEach(mission => {
        allMission.push({ course, mission: mission.name, crewList: [] });
      });
    }
    this.setAllMission(allMission);
  }

  getMissionCrewList(course, mission) {
    const allMission = this.getAllMission();
    return allMission.find(row => row.course === course && row.mission === mission).crewList;
  }

  clearMissionCrewList(allMission, course, mission) {
    allMission.find(row => row.mission === mission && row.course === course).crewList = [];
  }
}
