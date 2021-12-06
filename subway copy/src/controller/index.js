import { createElement, $ } from './utils.js';
import { MENU } from '../model/constants.js';
import { attachButtonsInView, showContentsByName } from '../view/index.js';

const initButtons = () => {
  const buttons = ['station', 'line', 'section', 'mapPrint'];
  const buttonsArray = buttons.map(x =>
    createElement({
      tag: 'button',
      name: MENU(x).name,
      id: MENU(x).id,
      innerHTML: MENU(x).text,
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
  showContentsByName('station');
};

export const initGame = () => {
  initDom();
};
