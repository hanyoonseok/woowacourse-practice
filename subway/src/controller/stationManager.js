import Station from '../model/station.js';
import { appendChilds, makeElement } from './utils.js';

const getAllStation = () => {
  return JSON.parse(localStorage.getItem('stations'));
};

export const addStation = stationName => {
  const allStation = getAllStation();
  allStation.push(stationName);
  localStorage.setItem('stations', JSON.stringify(allStation));
};

const deleteStation = button => {
  const allStation = getAllStation();
  const deleted = allStation.filter(x => x !== button.dataset.station.toString());
  const table = button.parentNode.parentElement;
  localStorage.setItem('stations', JSON.stringify(deleted));

  tableRenewal(table);
};

export const setAllDeleteButonEvent = () => {
  const allButtons = document.querySelectorAll('.delete-button');
  allButtons.forEach(button => {
    button.addEventListener('click', () => deleteStation(button));
  });
};

const tableTemplate = () => {
  const tableContainer = makeElement({ tag: 'table' });
  tableContainer.border = '1';
  const tableHeader1 = makeElement({ tag: 'th', innerHTML: '역 이름' });
  const tableHeader2 = makeElement({ tag: 'th', innerHTML: '설정' });
  appendChilds(tableContainer, [tableHeader1, tableHeader2]);

  return tableContainer;
};

const makeTableRow = (table, rowList) => {
  rowList.forEach(station => {
    const tr = makeElement({ tag: 'tr' });
    const td1 = makeElement({ tag: 'td', innerHTML: station });
    const td2 = makeElement({ tag: 'button', innerHTML: '삭제', className: 'delete-button' });
    td2.dataset.station = station;
    appendChilds(tr, [td1, td2]);
    table.appendChild(tr);
  });
};

const makeTableHeader = () => {
  const tableHeader1 = makeElement({ tag: 'th', innerHTML: '역 이름' });
  const tableHeader2 = makeElement({ tag: 'th', innerHTML: '설정' });

  return [tableHeader1, tableHeader2];
};

export const makeTable = () => {
  const tableContainer = tableTemplate();
  const allStation = getAllStation();
  makeTableRow(tableContainer, allStation);

  return tableContainer;
};

export const tableRenewal = table => {
  table.innerHTML = '';
  appendChilds(table, makeTableHeader());
  const allStation = getAllStation();
  makeTableRow(table, allStation);
  setAllDeleteButonEvent();
};
