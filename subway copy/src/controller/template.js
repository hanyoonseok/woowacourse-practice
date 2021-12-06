import { createElement, appendChilds } from './utils.js';
import { MENU } from '../model/constants.js';

export const makeTableHeader = type =>
  MENU(type).tableHeader.map(x => createElement({ tag: 'th', innerHTML: x }));

export const tableTemplate = type => {
  const tableContainer = createElement({ tag: 'table', border: 1 });
  const tableHeader = makeTableHeader(type);
  appendChilds(tableContainer, tableHeader);

  return tableContainer;
};
