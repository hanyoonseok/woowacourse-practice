import { tableTemplate, makeTableHeader } from './template.js';
import { getAllData, createElement, appendChilds } from './utils.js';
import { MENU } from '../model/constants.js';

const makeTableRows = type => {
  const allStation = getAllData('stations');
  let tableRows = [];
  if (allStation) {
    allStation.forEach(station => {
      const trTag = createElement({ tag: 'tr' });
      const stationName = createElement({ tag: 'td', innerHTML: station });
      const deleteButton = createElement({
        tag: 'button',
        className: MENU(type).DeleteButton,
        innerHTML: '삭제',
      });
      deleteButton.dataset.station = station;
      appendChilds(trTag, [stationName, deleteButton]);
      tableRows.push(trTag);
    });
  }
  return tableRows;
};

export const makeTable = type => {
  const table = tableTemplate(type);
  const tableRows = makeTableRows(type);
  appendChilds(table, tableRows);

  return table;
};

const setAllStation = allStation => localStorage.setItem('stations', JSON.stringify(allStation));

export const addStation = (station, table) => {
  const allStation = getAllData('stations');
  allStation.push(station);
  setAllStation(allStation);
  tableRefresh(table);
};

const tableRefresh = table => {
  const tableHeader = makeTableHeader('station');
  const tableRows = makeTableRows('station');
  table.innerHTML = '';
  appendChilds(table, tableHeader);
  appendChilds(table, tableRows);
  setAllDeleteButtonEvent();
};

const deleteButton = button => {
  const allStation = getAllData('stations');
  const deletedAllStation = allStation.filter(station => station !== button.dataset.station);
  const table = button.parentNode.parentElement;
  setAllStation(deletedAllStation);
  tableRefresh(table);
};

export const setAllDeleteButtonEvent = () => {
  const allButtons = document.querySelectorAll(`.${MENU('station').DeleteButton}`);
  allButtons.forEach(button => button.addEventListener('click', () => deleteButton(button)));
};
