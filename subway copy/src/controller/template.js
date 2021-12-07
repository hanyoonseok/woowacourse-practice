import { createElement, appendChilds, getAllData } from './utils.js';
import { MENU } from '../model/constants.js';

export const makeTableHeader = type =>
  MENU(type).tableHeader.map(x => createElement({ tag: 'th', innerHTML: x }));

export const tableTemplate = type => {
  const tableContainer = createElement({ tag: 'table', border: 1 });
  const tableHeader = makeTableHeader(type);
  appendChilds(tableContainer, tableHeader);

  return tableContainer;
};

const makeOptions = array => array.map(x=>createElement({tag:'option', innerHTML:x}))

export const makeSelect = (key,id) => {
  const allData = getAllData(key);
  const selectBox = createElement({tag:'select', id:id});
  const options = makeOptions(allData);
  appendChilds(selectBox, options)

  return selectBox
}