import Station from '../model/station.js';
import { appendChilds, makeElement, getAllData } from './utils.js';

export const addStation = stationName => {
  const allStation = getAllData('stations');
  if (Station.isValidStationName(stationName)) {
    allStation.push(stationName);
  } else {
    alert('중복된 역이 있습니다.');
  }
  localStorage.setItem('stations', JSON.stringify(allStation));
};

const deleteStation = button => {
  const allStation = getAllData('stations');
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
  const allStation = getAllData('stations');
  makeTableRow(tableContainer, allStation);

  return tableContainer;
};

export const tableRenewal = table => {
  table.innerHTML = '';
  appendChilds(table, makeTableHeader());
  const allStation = getAllData('stations');
  makeTableRow(table, allStation);
  setAllDeleteButonEvent();
};
