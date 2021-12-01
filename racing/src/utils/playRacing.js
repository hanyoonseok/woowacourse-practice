import Car from '../car/index.js';
import { createElementWithText } from './common.js';

const makeCarObjectList = carNameList => {
  const carObjectList = carNameList.map(x => new Car(x));

  return carObjectList;
};

const moveCars = carObjectList => {
  carObjectList.forEach(x => {
    x.moveCar();
  });
};

const printCars = (carObjectList, result) => {
  carObjectList.forEach(x => {
    result.appendChild(createElementWithText('div', x.printStatus()));
  });
  result.appendChild(createElementWithText('br', ''));
};

const sortCarsByMove = Cars => {
  Cars.sort((a, b) => {
    return b.move - a.move;
  });

  return Cars;
};

const findWinners = carObjectList => {
  const sortedCarList = sortCarsByMove(carObjectList);
  const winnerCarMove = sortedCarList[0].move;
  const winners = sortedCarList.filter(x => winnerCarMove === x.move);

  return winners;
};

export const playRacing = (tryNum, carNameList, result) => {
  const carObjectList = makeCarObjectList(carNameList);
  let i;
  for (i = 0; i < tryNum; i++) {
    moveCars(carObjectList);
    printCars(carObjectList, result);
  }
  
  return findWinners(carObjectList);
};
