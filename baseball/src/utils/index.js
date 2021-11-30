import { RESULT_MESSAGE } from '../constants/index.js';

export const $ = id => {
  const dom = document.getElementById(id);

  return dom;
};

const myCreateElement = (tag, text) => {
  const htmlTag = document.createElement(tag);
  htmlTag.innerHTML = text;

  return htmlTag;
};

const initGame = computer => {
  $('result').innerHTML = '';
  $('submit').disabled = false;
  $('user-input').value = '';
  computer.setRandomNumber();
};

const onRestartClick = (event, user, computer) => {
  event.preventDefault();
  user.initUser();
  initGame(computer);
};

// div 태그에 게임 재시작 문구와 버튼을 세팅하는 함수
const setRestartDiv = ($result, user, computer) => {
  const divTag = myCreateElement('div', '');
  const restartButton = myCreateElement('button', '게임 재시작');

  divTag.innerHTML = RESULT_MESSAGE.restart;
  restartButton.id = 'game-restart-button';
  restartButton.addEventListener('click', event => onRestartClick(event, user, computer));
  divTag.appendChild(restartButton);
  $result.appendChild(divTag);
};

const setResultDiv = (resultMessage, $result) => {
  $result.innerHTML = resultMessage;
};

export const showResult = (resultMessage, user, computer) => {
  const $result = $('result');
  setResultDiv(resultMessage, $result);
  if (user.strikeNum === 3) {
    setRestartDiv($result, user, computer);
    $('submit').disabled = true;
  }
};
