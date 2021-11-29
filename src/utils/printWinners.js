const makeWinnersMessage = winners => {
  let winnerArray = [];
  winners.forEach(x => {
    winnerArray.push(x.name);
  });
  const winnerMessage = winnerArray.join(', ');

  return winnerMessage;
};

const makeWinnerHTML = winnerMessage => {
  const strongTag = document.createElement('strong');
  strongTag.innerHTML = `최종 우승자: ${winnerMessage}`;

  return strongTag;
};

export const printWinners = (winners, result) => {
  const winnersMessage = makeWinnersMessage(winners);
  result.appendChild(makeWinnerHTML(winnersMessage));
};
