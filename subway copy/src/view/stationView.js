import { $, appendChilds, createElement } from '../controller/utils.js';
import { SELECTOR } from '../model/constants.js';

const makePassiveContents = () => {
  const title = createElement({ tag: 'p', innerHTML: '역 이름' });
  const stationNameInput = createElement({
    tag: 'input',
    type: 'text',
    id: SELECTOR.stationNameInput,
  });
  const stationAddButton = createElement({
    tag: 'button',
    id: SELECTOR.stationAddButton,
    innerHTML: '역 추가',
  });

  return [title, stationNameInput, stationAddButton];
};

export const stationView = () => {
  const contents = $('contents');
  const passiveContents = makePassiveContents();
  appendChilds(contents, passiveContents);
};
