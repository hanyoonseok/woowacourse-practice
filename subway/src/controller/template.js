import { appendChilds, makeElement, getAllData } from './utils.js';

export const tableTemplate = (header) => {
  const tableContainer = makeElement({ tag: 'table' });
  tableContainer.border = '1';
  header.forEach(name => {
      const makeHeader = makeElement({ tag: 'th', innerHTML: name });
      tableContainer.appendChild(makeHeader);
  })

  return tableContainer;
};

export const makeTableRow = (table, rowList) => {
  rowList.forEach(station => {
    const tr = makeElement({ tag: 'tr' });
    const td1 = makeElement({ tag: 'td', innerHTML: station });
    const td2 = makeElement({ tag: 'button', innerHTML: '삭제', className: 'station-delete-button' });
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

export const makeTable = (name,header) => {
  const tableContainer = tableTemplate(header);
  const allStation = getAllData(name);
  makeTableRow(tableContainer, allStation);

  return tableContainer;
};

export const makeSelect = (name,id) => {
  const selectBox = makeElement({ tag: 'select', id:id });
  getAllData(name).map(option => {
    const optionTag = makeElement({ tag: 'option', innerHTML: option });
    selectBox.appendChild(optionTag);
  });

  return selectBox;
};
