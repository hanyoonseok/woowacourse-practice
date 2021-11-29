import { playRacing } from './playRacing.js';
import { printWinners } from './printWinners.js';

export const addCarNameSubmitEvent = inputs => {
  const $carNameSubmit = document.getElementById('car-names-submit');
  const $carName = document.getElementById('car-names-input');

  $carNameSubmit.addEventListener('click', event => {
    event.preventDefault();
    if (inputs.isCarNameValid($carName.value)) {
      $carNameSubmit.disabled = true;
    }
  });
};

export const addTryNumSubmitEvent = inputs => {
  const $tryNumSubmit = document.getElementById('racing-count-submit');
  const $tryNum = document.getElementById('racing-count-input');
  const $result = document.getElementById('result');

  $tryNumSubmit.addEventListener('click', event => {
    event.preventDefault();
    if (inputs.isTryNumValid($tryNum.value)) {
      $tryNumSubmit.disabled = true;
      const winners = playRacing($tryNum.value, inputs.carNameList, $result);
      printWinners(winners, $result);
    } else {
      alert('1이상의 자연수를 넣어주세요');
    }
  });
};
