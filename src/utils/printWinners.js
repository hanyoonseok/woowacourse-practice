import { myCreateElement } from './common.js';

const makeWinnersMessage = winners => {
  const winnerArray = winners.map(x => x.name);
  const winnerMessage = winnerArray.join(', ');

  return winnerMessage;
};

const makeWinnerHTML = winnerMessage => {
  const spanTag = myCreateElement('span', `최종 우승자: ${winnerMessage}`);
  spanTag.id = 'racing-winners';

  return spanTag;
};

export const printWinners = (winners, result) => {
  const winnersMessage = makeWinnersMessage(winners);
  result.appendChild(makeWinnerHTML(winnersMessage));
};
