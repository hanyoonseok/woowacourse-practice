import { SELECTOR } from '../model/constants.js';
import Dijkstra from '../utils/Dijkstra.js';
import { $ } from '../utils/index.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.dijkstra = new Dijkstra();
  }
  init() {
    this.addEventListeners();
  }

  addEventListeners() {
    $(SELECTOR.search).addEventListener('click', () => this.searchShortest());
  }

  searchShortest() {
    const radios = document.getElementsByName(SELECTOR.radio);
    radios.forEach(x => {
      if (x.checked) {
        this.findShortest(x.value);
      }
    });
  }
  addDistanceEdges() {
    this.model.lines.forEach(line =>
      line.info.forEach(edge => this.dijkstra.addEdge(edge.depart, edge.arrive, edge.cost[0])),
    );
  }
  addTimeEdges() {
    this.model.lines.forEach(line =>
      line.info.forEach(edge => this.dijkstra.addEdge(edge.depart, edge.arrive, edge.cost[1])),
    );
  }

  findShortest(type) {
    if (type === 'distance') {
      this.addDistanceEdges();
    } else if (type === 'time') {
      this.addTimeEdges();
    }

    const depart = $(SELECTOR.departure).value;
    const arrive = $(SELECTOR.arrival).value;
    const result = this.dijkstra.findShortestPath(depart, arrive);
    console.log(result);
  }
}
