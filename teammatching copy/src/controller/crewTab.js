import { SELECTOR } from '../constants/constants.js';
import { crewTableHeader, crewTableRow } from '../constants/template.js';
import { $, validation } from './utils.js';

export default class CrewTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addRadioEventListener();
  }

  addRadioEventListener() {
    const radioButtons = document.getElementsByName(SELECTOR.crewRadioName);
    radioButtons.forEach(radio => radio.addEventListener('change', () => this.selectCourse()));
  }

  selectCourse() {
    const selectedRadioValue = document.querySelector(
      `input[name=${SELECTOR.crewRadioName}]:checked`,
    ).value; // frontend
    const selectedRadioText = document.querySelector(`label[for=${selectedRadioValue}]`).innerHTML; // 프론트엔드
    this.model.setSelectedCourse(selectedRadioText);
    this.view.renderCrewManageSection(selectedRadioText);
    this.addCrewAddButtonEvent();
    this.initCourseTable();
  }

  initCourseTable() {
    const table = this.view.getTable();
    const allCourse = this.model.getAllCourse();
    const selectedCourse = this.model.getSelectedCourse();
    this.view.clearTable(table);
    this.view.addTableHeader(table, crewTableHeader);
    allCourse
      .find(e => e.name === selectedCourse)
      .crewList.forEach((crew, i) => this.view.addTableRow(table, crewTableRow(i + 1, crew)));
    this.addAllDeleteButtonEvent();
  }

  addAllDeleteButtonEvent() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.crewDeleteButton}`);
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.deleteCrew(button.dataset.target)),
    );
  }

  deleteCrew(crew) {
    const deleteConfirm = window.confirm('정말 삭제하시겠습니까?');
    if (deleteConfirm) {
      const allCourse = this.model.getAllCourse();
      const selectedCourseName = this.model.getSelectedCourse();
      const selectedCourse = allCourse.find(e => e.name === selectedCourseName);
      const deletedCrewList = selectedCourse.crewList.filter(e => e !== crew);
      selectedCourse.crewList = deletedCrewList;
      this.model.setAllCourse(allCourse);
      this.initCourseTable();
    }
  }

  addCrewAddButtonEvent() {
    $(SELECTOR.crewAddButton).addEventListener('click', e => this.addCrew(e));
  }

  addCrew(e) {
    e.preventDefault();
    const crewName = $(SELECTOR.crewNameInput).value;
    const allCourse = this.model.getAllCourse();
    const selectedCourse = this.model.getSelectedCourse();
    const selectedCrewList = allCourse.find(course => course.name === selectedCourse).crewList;
    if (validation.isCrewNameValid(crewName, selectedCrewList)) {
      allCourse.find(course => course.name === selectedCourse).crewList.push(crewName);
      this.model.setAllCourse(allCourse);
      this.initCourseTable();
      this.view.clearInput($(SELECTOR.crewNameInput));
    }
  }
}
