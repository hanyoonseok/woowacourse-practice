import Car from '../Car/index.js';
import { GAME_RULE } from '../constants/index.js';

const makeCarObjects = carNameList => {
  let CarList = [];
  carNameList.map(x => {
    const car = new Car(x);
    CarList.push(car);
  });

  return CarList;
};

const makeRandomNumber = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(
    GAME_RULE.rangeMin,
    GAME_RULE.rangeMax,
  );

  return randomNumber;
};

const moveCars = Cars => {
  Cars.map(x => {
    if (makeRandomNumber() >= 4) {
      x.move++;
    }
  });
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
  let winners = [];
  let i;
  for (i = 0; i < Cars.length; i += 1) {
    if (Cars[i].move === winnerCarMove) {
      winners.push(Cars[i]);
    }
  }

  return winners;
};
export const playRacing = (tryNum, carNameList) => {
  const Cars = makeCarObjects(carNameList);
  let i;
  for (i = 0; i < tryNum; i += 1) {
    moveCars(Cars);
  }
  const winners = findWinner(Cars);

  return winners;
};
