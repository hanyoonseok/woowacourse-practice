import Car from '../Car/index.js';
import { myCreateElement } from './common.js';

const makeCarObjects = carNameList => {
  const CarList = carNameList.map(x => new Car(x));

  return CarList;
};

const moveCars = Cars => {
  Cars.forEach(x => {
    x.moveCar();
  });
};

const printCars = (Cars, result) => {
  Cars.forEach(x => {
    result.appendChild(myCreateElement('div', x.printStatus()));
  });
  result.appendChild(myCreateElement('br', ''));
};

const sortCarsByMove = Cars => {
  Cars.sort((a, b) => {
    return b.move - a.move;
  });

  return Cars;
};

const findWinners = Cars => {
  const sortedCars = sortCarsByMove(Cars);
  const winnerCarMove = sortedCars[0].move;
  const winners = sortedCars.filter(x => winnerCarMove === x.move);

  return winners;
};

export const playRacing = (tryNum, carNameList, result) => {
  const Cars = makeCarObjects(carNameList);
  let i;
  for (i = 0; i < tryNum; i++) {
    moveCars(Cars);
    printCars(Cars, result);
  }
  const winners = findWinners(Cars);

  return winners;
};
