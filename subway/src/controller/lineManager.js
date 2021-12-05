import Station from '../model/station.js';
import { appendChilds, makeElement, getAllData } from './utils.js';
import Line from '../Model/line.js';

const tableTemplate = header => {
  const tableContainer = makeElement({ tag: 'table' });
  tableContainer.border = '1';
  header.forEach(name => {
    const makeHeader = makeElement({ tag: 'th', innerHTML: name });
    tableContainer.appendChild(makeHeader);
  });

  return tableContainer;
};

const makeTableRow = (table, rowList) => {
  rowList.forEach(line => {
    const tr = makeElement({ tag: 'tr' });
    const td1 = makeElement({ tag: 'td', innerHTML: line.name });
    const td2 = makeElement({ tag: 'td', innerHTML: line.stations[0] });
    const td3 = makeElement({ tag: 'td', innerHTML: line.stations[line.stations.length - 1] });
    const td4 = makeElement({ tag: 'button', innerHTML: '삭제', className: 'line-delete-button' });
    td4.dataset.line = line.name;
    appendChilds(tr, [td1, td2, td3, td4]);
    table.appendChild(tr);
  });
};

const makeTableHeader = headers => {
  let header = [];
  headers.forEach(name => {
    header.push(makeElement({ tag: 'th', innerHTML: name }));
  });

  return header;
};

export const makeTable = header => {
  const tableContainer = tableTemplate(header);
  const allLine = getAllData('lines');
  if (allLine) {
    makeTableRow(tableContainer, allLine);
  }

  return tableContainer;
};

export const tableRenewal = (table, headers) => {
  table.innerHTML = '';
  appendChilds(table, makeTableHeader(headers));
  const allLine = getAllData('lines');
  makeTableRow(table, allLine);
  setAllDeleteButonEvent(headers);
};

export const addLine = (lineName, lineStart, lineEnd) => {
  let allLine = [];
  if (getAllData('lines')) {
    allLine = getAllData('lines');
  }
  const newLine = new Line(lineName);
  newLine.stations.push(lineStart);
  newLine.stations.push(lineEnd);
  allLine.push(newLine);
  localStorage.setItem('lines', JSON.stringify(allLine));
};

const deleteLine = (button, headers) => {
  const allLine = getAllData('lines');
  const deleted = allLine.filter(x => x.name !== button.dataset.line.toString());
  const table = button.parentNode.parentElement;
  localStorage.setItem('lines', JSON.stringify(deleted));

  tableRenewal(table, headers);
};

export const setAllDeleteButonEvent = headers => {
  const allButtons = document.querySelectorAll('.line-delete-button');
  allButtons.forEach(button => {
    button.addEventListener('click', () => deleteLine(button, headers));
  });
};
