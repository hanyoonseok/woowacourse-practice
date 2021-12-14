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
    this.model.lines.forEach(line => this.dijkstra.addEdge(line.depart, line.arrive, line.cost[0]));
  }
  addTimeEdges() {
    this.model.lines.forEach(line => this.dijkstra.addEdge(line.depart, line.arrive, line.cost[1]));
  }

  findShortest(type) {
    let text;
    if (type === 'distance') {
      this.addDistanceEdges();
      text = '최단거리';
    } else if (type === 'time') {
      this.addTimeEdges();
      text = '최소시간';
    }

    const depart = $(SELECTOR.departure).value;
    const arrive = $(SELECTOR.arrival).value;
    const result = this.dijkstra.findShortestPath(depart, arrive);
    const info = this.findInfo(result);
    info.type = text;
    this.view.showResult(result.join('▶'), info);
  }

  findInfo(result) {
    let dist = 0;
    let time = 0;
    for (let i = 0; i < result.length - 1; i += 1) {
      const depart = result[i];
      const arrive = result[i + 1];
      for (let j = 0; j < this.model.lines.length - 1; j += 1) {
        const row = this.model.lines[j];
        if (row.depart === depart && row.arrive === arrive) {
          dist += row.cost[0];
          time += row.cost[1];
          break;
        }
      }
    }
    console.log(dist, time);
    return { dist, time };
  }
}
