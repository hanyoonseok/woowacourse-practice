import { createElement, $ } from './utils.js';
import { MENU_BUTTON } from '../model/constants.js';
import { attachButtonsInView, showContentsByName } from '../view/index.js';

const initButtons = () => {
  const buttons = ['station', 'line', 'section', 'mapPrint'];
  const buttonsArray = buttons.map(x =>
    createElement({
      tag: 'button',
      name: MENU_BUTTON(x).name,
      id: MENU_BUTTON(x).id,
      innerHTML: MENU_BUTTON(x).text,
    }),
  );
  buttonsArray.forEach(button =>
    button.addEventListener('click', () => showContentsByName(button.name)),
  );

  attachButtonsInView(buttonsArray);
};
const initDom = () => {
  const container = createElement({ tag: 'div', id: 'container' });
  const contents = createElement({ tag: 'div', id: 'contents' });
  $('app').appendChild(container);
  initButtons();
  $('app').appendChild(contents);
};

export const initGame = () => {
  initDom();
};
