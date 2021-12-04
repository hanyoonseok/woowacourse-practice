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

export const makeTable = () => {
  const tableContainer = makeElement({ tag: 'table' });
  tableContainer.border="1";
  const tableHeader1 = makeElement({ tag: 'th', innerHTML: '역 이름' });
  const tableHeader2 = makeElement({ tag: 'th', innerHTML: '설정' });
  appendChilds(tableContainer, [tableHeader1, tableHeader2]);

  const allStation = getAllStation();
  allStation.forEach(station => {
    const tr = makeElement({ tag: 'tr' });
    const td1 = makeElement({ tag: 'td', innerHTML: station });
    const td2 = makeElement({ tag: 'button', innerHTML: '삭제' });
    appendChilds(tr, [td1, td2]);
    tableContainer.appendChild(tr);
  });

  return tableContainer;
};
