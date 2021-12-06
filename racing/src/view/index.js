import { createElement, $ } from '../controller/utils.js';

export const printStatus = car => {
  const resultDiv = $('result');
  let status = `${car.name}: `;
  let i;
  for (i = 0; i < car.move; i++) {
    status += '-';
  }
  const statusDom = createElement({ tag: 'div', innerHTML: status });
  resultDiv.appendChild(statusDom);
};

export const printWinner = winnerArray => {
  const resultDiv = $('result');
  const winnerMessage = winnerArray.join(', ');
  const spanContainer = createElement({ tag: 'span', innerHTML: '최종 우승자: ' });
  const spanTag = createElement({ tag: 'span', innerHTML: winnerMessage });

  spanContainer.appendChild(spanTag);
  resultDiv.appendChild(spanContainer);
};
