import { makeElement, getAllData, appendChilds } from './utils.js';
import { makeSelect } from './template.js';

const deleteStation = (line, button) => {
  const allLine = getAllData('lines');
  let searchLine = allLine.find(e => e.name === line); //호선
  const index = searchLine.stations.indexOf(button.dataset.station);
  searchLine.stations.splice(index, 1);
  const table = button.parentNode.parentElement;
  localStorage.setItem('lines', JSON.stringify(allLine));
  tableRenewal(table, line);
};

export const makeLineButtons = () => {
  const div = makeElement({ tag: 'div' });
  const allLine = getAllData('lines');
  allLine.forEach(line => {
    const lineButton = makeElement({
      tag: 'button',
      innerHTML: line.name,
      className: 'section-line-menu-button',
    });
    lineButton.dataset.line = line.name;
    div.appendChild(lineButton);
  });

  return div;
};

const tableTemplate = () => {
  const tableContainer = makeElement({ tag: 'table' });
  tableContainer.border = '1';
  appendChilds(tableContainer, makeTableHeader());

  return tableContainer;
};

const makeTableRow = (table, rowList) => {
  rowList.forEach((station, idx) => {
    const tr = makeElement({ tag: 'tr' });
    const td1 = makeElement({ tag: 'td', innerHTML: `${idx}` });
    const td2 = makeElement({ tag: 'td', innerHTML: station });
    const td3 = makeElement({
      tag: 'button',
      innerHTML: '노선에서 제거',
      className: 'section-delete-button',
    });
    td3.dataset.station = station;
    appendChilds(tr, [td1, td2, td3]);
    table.appendChild(tr);
  });
};

const makeTableHeader = () => {
  const headers = ['순서', '이름', '설정'];
  let header = [];
  headers.forEach(name => {
    header.push(makeElement({ tag: 'th', innerHTML: name }));
  });

  return header;
};

export const makeTable = line => {
  const tableContainer = tableTemplate();
  const allStation = getAllData('lines').find(e => e.name === line).stations;
  if (allStation) {
    makeTableRow(tableContainer, allStation);
    setAllDeleteButtonEvent(line)
  }

  return tableContainer;
};

const addSection = (line, option, order) => {
  if (getAllData('lines')) {
    let allLine = getAllData('lines');
    let searchLine = allLine.find(e => e.name === line);
    searchLine.stations.splice(order, 0, option);
    localStorage.setItem('lines', JSON.stringify(allLine));
  }
};
const tableRenewal = (table, line) => {
  table.innerHTML = '';
  appendChilds(table, makeTableHeader());
  const allStation = getAllData('lines').find(e => e.name === line).stations;

  makeTableRow(table, allStation);
  setAllDeleteButtonEvent(line)
};

const showComponent = (line, contents) => {
  contents.innerHTML = '';
  const title = makeElement({ tag: 'p', innerHTML: `${line} 관리` });
  const subtitle = makeElement({ tag: 'p', innerHTML: '구간 등록' });
  const selectBox = makeSelect('stations', 'select-station-selector');
  const sectionOrderInput = makeElement({
    tag: 'input',
    type: 'number',
    placeholder: '순서',
    id: 'section-order-input',
  });
  const sectionAddButton = makeElement({ tag: 'button', innerHTML: '등록' });
  const table = makeTable(line);
  sectionAddButton.addEventListener('click', () => {
    addSection(line, selectBox.value, sectionOrderInput.value);
    tableRenewal(table, line);
    sectionOrderInput.value='';
  });
  appendChilds(contents, [title, subtitle, selectBox, sectionOrderInput, sectionAddButton, table]);
  setAllDeleteButtonEvent(line);
};

export const setAllMenuButonEvent = contents => {
  const allButtons = document.querySelectorAll('.section-line-menu-button');
  allButtons.forEach(button => {
    button.addEventListener('click', () => showComponent(button.dataset.line, contents));
  });
};

export const setAllDeleteButtonEvent = line => {
  const allButtons = document.querySelectorAll('.section-delete-button');
  allButtons.forEach(button => {
    button.addEventListener('click', () => deleteStation(line, button));
  });
};
