export default class Model {
  constructor() {
    this.makeCourse('프론트엔드');
    this.makeCourse('백엔드');
    this.selectedCourse = '';
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

  getCourseCrew(course) {}
}
