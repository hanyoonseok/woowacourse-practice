import Car from '../Car/index.js';

const makeCarObjects = carNameList => {
  let CarList = [];
  carNameList.map(x => {
    const car = new Car(x);
    CarList.push(car);
  });

  return CarList;
};

const moveCars = Cars => {
  Cars.forEach(x => {
    x.moveCar();
  });
};

const myCreateElement = (tag, text) => {
  const htmlTag = document.createElement(tag);
  htmlTag.innerHTML = text;

  return htmlTag;
};

const printCars = (Cars, result) => {
  Cars.forEach(x => {
    result.appendChild(myCreateElement('div', x.printStatus()));
  });
  result.appendChild(myCreateElement('br'));
};

const sortCarsToMove = Cars => {
  Cars.sort((a, b) => {
    return b.move - a.move;
  });

  return Cars;
};

const findWinner = Cars => {
  const sortedCars = sortCarsToMove(Cars);
  const winnerCarMove = sortedCars[0].move;
  let winners = sortedCars.filter(x => {
    return winnerCarMove === x.move;
  });

  return winners;
};
export const playRacing = (tryNum, carNameList, result) => {
  const Cars = makeCarObjects(carNameList);
  let i;
  for (i = 0; i < tryNum; i += 1) {
    moveCars(Cars);
    printCars(Cars, result);
  }
  const winners = findWinner(Cars);

  return winners;
};
