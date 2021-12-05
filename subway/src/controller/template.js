import { appendChilds, makeElement, getAllData } from './utils.js';

export const tableTemplate = () => {
  const tableContainer = makeElement({ tag: 'table' });
  tableContainer.border = '1';
  const tableHeader1 = makeElement({ tag: 'th', innerHTML: '역 이름' });
  const tableHeader2 = makeElement({ tag: 'th', innerHTML: '설정' });
  appendChilds(tableContainer, [tableHeader1, tableHeader2]);

  return tableContainer;
};

export const makeTableRow = (table, rowList) => {
  rowList.forEach(station => {
    const tr = makeElement({ tag: 'tr' });
    const td1 = makeElement({ tag: 'td', innerHTML: station });
    const td2 = makeElement({ tag: 'button', innerHTML: '삭제', className: 'delete-button' });
    td2.dataset.station = station;
    appendChilds(tr, [td1, td2]);
    table.appendChild(tr);
  });
};

export const makeTableHeader = () => {
  const tableHeader1 = makeElement({ tag: 'th', innerHTML: '역 이름' });
  const tableHeader2 = makeElement({ tag: 'th', innerHTML: '설정' });

  return [tableHeader1, tableHeader2];
};

export const makeTable = name => {
  const tableContainer = tableTemplate();
  const allStation = getAllData(name);
  makeTableRow(tableContainer, allStation);

  return tableContainer;
};

export const makeSelect = name => {
  const selectBox = makeElement({ tag: 'select' });
  getAllData(name).map(option => {
    const optionTag = makeElement({ tag: 'option', innerHTML: option });
    selectBox.appendChild(optionTag);
  });

  return selectBox;
};
