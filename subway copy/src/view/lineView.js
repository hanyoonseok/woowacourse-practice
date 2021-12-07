import { $, appendChilds, createElement } from '../controller/utils.js';
import { addLine, makeTable } from '../controller/lineController.js';
import { makeSelect } from '../controller/template.js';
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
  const lineStartSelect = makeSelect('stations', MENU(type).StartSelect);
  const lineEnd = createElement({ tag: 'p', innerHTML: '하행 종점' });
  const lineEndSelect = makeSelect('stations', MENU(type).EndSelect);
  const lineAddButton = createElement({
    tag: 'button',
    innerHTML: '노선 추가',
    id: MENU(type).AddButton,
  });
  const table = makeTable('line')
  lineAddButton.addEventListener('click', () =>
    addLine(nameInput.value, lineStartSelect.value, lineEndSelect.value),
  );

  return [inputTitle, nameInput, lineStart, lineStartSelect, lineEnd, lineEndSelect, lineAddButton, table];
};

export const lineView = () => {
  const contents = $('contents');
  const lineContents = makeContents();
  appendChilds(contents, lineContents);
  //setAllDeleteButtonEvent();
};
