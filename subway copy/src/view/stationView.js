import { $, appendChilds, createElement } from '../controller/utils.js';
import { makeTable, addStation, setAllDeleteButtonEvent } from '../controller/stationController.js';
import { MENU } from '../model/constants.js';

const makePassiveContents = () => {
  const title = createElement({ tag: 'p', innerHTML: '역 이름' });
  const type = 'station';
  const stationNameInput = createElement({
    tag: 'input',
    type: 'text',
    id: MENU(type).NameInput,
  });
  const stationAddButton = createElement({
    tag: 'button',
    id: MENU(type).AddButton,
    innerHTML: '역 추가',
  });
  const stationTitle = createElement({ tag: 'p', innerHTML: '지하철 역 목록' });
  const table = makeTable('station');
  stationAddButton.addEventListener('click', () => addStation(stationNameInput.value, table));

  return [title, stationNameInput, stationAddButton, stationTitle, table];
};

export const stationView = () => {
  const contents = $('contents');
  const passiveContents = makePassiveContents();
  appendChilds(contents, passiveContents);
  setAllDeleteButtonEvent();
};
