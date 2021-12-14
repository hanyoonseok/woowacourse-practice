import { KEY } from './constants.js';

export default class Model {
  getStations() {
    return JSON.parse(localStorage.getItem(KEY.station)) || [];
  }

  setStation(value) {
    localStorage.setItem(KEY.station, JSON.stringify(value));
  }

  addStation(station) {
    const stations = this.getStations();
    stations.push(station);
    this.setStation(stations);
  }

  deleteStation(station) {
    const stations = this.getStations();
    let deletedStations = stations.filter(x => x !== station);
    this.setStation(deletedStations);
  }
}
