import Station from '../model/station.js';
import { getAllData, appendChilds } from './utils.js';
import { makeTableRow, makeTableHeader } from './template.js';


export const addStation = stationName => {
  const allStation = getAllData('stations');
  if (Station.isValidStationName(stationName)) {
    allStation.push(stationName);
  } else {
    alert('중복된 역이 있습니다.');
  }
  localStorage.setItem('stations', JSON.stringify(allStation));
};

export const tableRenewal = table => {
  table.innerHTML = '';
  appendChilds(table, makeTableHeader());
  const allStation = getAllData('stations');
  makeTableRow(table, allStation);
  setAllDeleteButonEvent();
};

const deleteStation = button => {
  const allStation = getAllData('stations');
  const deleted = allStation.filter(x => x !== button.dataset.station.toString());
  const table = button.parentNode.parentElement;
  localStorage.setItem('stations', JSON.stringify(deleted));

  tableRenewal(table);
};

export const setAllDeleteButonEvent = () => {
  const allButtons = document.querySelectorAll('.station-delete-button');
  allButtons.forEach(button => {
    button.addEventListener('click', () => deleteStation(button));
  });
};
