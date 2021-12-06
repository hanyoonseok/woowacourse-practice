import { $, appendChilds, createElement } from '../controller/utils.js';
import { MENU } from '../model/constants.js';

const makeContents = () => {
  const type = 'line';
  const inputTitle = createElement({ tag: 'p', innerHTML: '노선 이름' });
  const nameInput = createElement({
    tag: 'input',
    id: MENU(type).NameInput,
    type: 'text',
    placeholder: '노선 이름을 입력해주세요.',
  });
  const lineStart = createElement({ tag: 'p', innerHTML: '상행 종점' });
  const lineStartSelect = createElement({ tag: 'select' });
  const lineEnd = createElement({ tag: 'p', innerHTML: '하행 종점' });
  const lineEndSelect = createElement({ tag: 'select' });
  const lineAddButton = createElement({
    tag: 'button',
    innerHTML: '노선 추가',
    id: MENU(type).AddButton,
  });

  return [inputTitle, nameInput, lineStart, lineStartSelect, lineEnd, lineEndSelect, lineAddButton];
};

export const lineView = () => {
  const contents = $('contents');
  const lineContents = makeContents();
  appendChilds(contents, lineContents);
  //setAllDeleteButtonEvent();
};
