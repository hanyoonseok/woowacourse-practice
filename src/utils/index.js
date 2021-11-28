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
  Cars.forEach(x => {
    if (makeRandomNumber() >= 4) {
      x.move++;
    }
  });
};

const makeResultInnerHTML = status =>{
    const divTag = document.createElement('div');
    divTag.innerHTML = status;

    return divTag;
}

const printCars = (Cars, result) => {
  Cars.forEach(x => {
    result.appendChild(makeResultInnerHTML(x.printStatus()))
  });
  result.appendChild(document.createElement('br'));
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

const makeWinnersMessage = winners => {
  let winnerArray = [];
  winners.forEach(x => {
    winnerArray.push(x.name);
  });

  const winnerMessage = winnerArray.join(', ');

  return winnerMessage;
};

const makeWinnerHTML = winnerMessage =>{
    const strongTag = document.createElement('strong');
    strongTag.innerHTML = `최종 우승자: ${winnerMessage}`;

    return strongTag
}
export const printWinners = (winners, result) => {
  const winnersMessage = makeWinnersMessage(winners);
  result.appendChild(makeWinnerHTML(winnersMessage));
};
