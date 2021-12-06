import { $, createElement } from './utils.js';
import { DOM } from '../model/constants.js';
import { checkCarNamesInput, checkRacingCountInput } from './user.js';
import Car from '../model/car.js';
import { moveCar } from './car.js';
import { printStatus, printWinner } from '../view/index.js';

const addEventListeners = user => {
  DOM.$carNamesSubmit.addEventListener('click', event => {
    event.preventDefault();
    checkCarNamesInput(user);
  });
  DOM.$racingCountSubmit.addEventListener('click', event => {
    event.preventDefault();
    checkRacingCountInput(user);
  });
  DOM.$racingCountInput.addEventListener('keyup', () => {
    DOM.$racingCountInput.value = DOM.$racingCountInput.value.replace(/[^0-9]/g, '');
  });
};

const initDom = () => {
  DOM.$racingCountInput.disabled = true;
  DOM.$racingCountSubmit.disabled = true;
  const resultDiv = createElement({ tag: 'div', id: 'result' });
  DOM.$app.appendChild(resultDiv);
};

export const initGame = user => {
  initDom();
  addEventListeners(user);
};

const makeCarObjectArray = user => user.carNames.map(name => new Car(name));

const sortObjectArray = carObjectArray => carObjectArray.sort((a, b) => b.move - a.move);

const searchWinner = carObjectArray => {
  const sortedCarObjectArray = sortObjectArray(carObjectArray);
  const mostMove = sortedCarObjectArray[0].move;

  return sortedCarObjectArray.filter(car => car.move === mostMove);
};

const resultGame = carObjectArray => {
  const winnerObjectArray = searchWinner(carObjectArray);
  const winnerArray = winnerObjectArray.map(winner => winner.name)
  printWinner(winnerArray)
};

export const playGame = user => {
  const carObjectArray = makeCarObjectArray(user);
  const resultDiv = $('result');
  let i;
  for (i = 0; i < user.racingCount; i += 1) {
    carObjectArray.forEach(car => moveCar(car));
    carObjectArray.forEach(car => printStatus(car));
    resultDiv.appendChild(createElement({ tag: 'br' }));
  }
  resultGame(carObjectArray);
};
