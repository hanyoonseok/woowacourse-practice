import { getAllData, setAllData, createElement, appendChilds } from './utils.js';
import { tableTemplate, makeTableHeader } from './template.js';
import {MENU} from '../model/constants.js'
import Line from '../model/line.js';

export const addLine = (nameInput, startSelect, endSelect) => {
  const allLine = getAllData('lines');
  const line = new Line(nameInput);
  line.stations.push(startSelect, endSelect);
  allLine.push(line);
  setAllData(allLine, 'lines');
};

const makeTableRows = type => {
  const allLine = getAllData('lines');
  let tableRows = [];
  if (allLine) {
    allLine.forEach(line => {
      const trTag = createElement({ tag: 'tr' });
      const lineName = createElement({ tag: 'td', innerHTML: line.name });
      const startStation = createElement({
        tag: 'td',
        innerHTML: line.stations[0],
      });
      const endStation = createElement({
        tag: 'td',
        innerHTML: line.stations[line.stations.length - 1],
      });
      const deleteButton = createElement({
        tag: 'button',
        className: MENU(type).DeleteButton,
        innerHTML: '삭제',
      });
      deleteButton.dataset.line = line.name;
      appendChilds(trTag, [lineName, startStation, endStation, deleteButton]);
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
