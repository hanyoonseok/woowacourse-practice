export default class PrintTab {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    const lines = this.model.getLines();
    this.view.showMap(lines);
  }
}
