import { playRacing } from './playRacing.js';
import { printWinners } from './printWinners.js';

export const addCarNameSubmitEvent = ($carName, $carNameSubmit, inputs) => {
  $carNameSubmit.addEventListener('click', event => {
    event.preventDefault();
    if (inputs.isCarNameValid($carName.value)) {
      $carNameSubmit.disabled = true;
    }
  });
};
export const addTryNumSubmitEvent = ($tryNumSubmit, inputs, $tryNum, $result) => {
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
