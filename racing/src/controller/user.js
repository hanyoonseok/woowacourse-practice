import { DOM } from '../model/constants.js';
import { playGame } from './game.js';

const isEmptyOrBlank = carName => {
  const isIncludeBlank = carName === '' || carName.includes(' ');
  if (isIncludeBlank) {
    alert('공백을 제거해주세요');
  }

  return isIncludeBlank;
};

const isInLength = carName => {
  const isValid = carName.length <= 5 && carName.length > 0;
  if (!isValid) {
    alert('1자 이상 5자 이하의 이름을 작성해주세요');
  }

  return isValid;
};

const isCarNameValid = carName => !isEmptyOrBlank(carName) && isInLength(carName);

const isCarNamesArrayValid = carNamesArray => {
  let isValid = true;
  carNamesArray.forEach(carName => {
    if (!isCarNameValid(carName)) isValid = false;
  });

  return isValid;
};

export const checkCarNamesInput = user => {
  const carNamesValue = DOM.$carNamesInput.value;
  const carNamesArray = carNamesValue.split(',');

  if (!isCarNamesArrayValid(carNamesArray)) {
    DOM.$carNamesInput.value = '';
    return;
  }
  DOM.$carNamesInput.disabled = true;
  DOM.$carNamesSubmit.disabled = true;
  DOM.$racingCountInput.disabled = false;
  DOM.$racingCountSubmit.disabled = false;
  user.carNames = [...carNamesArray];
};

const isNumber = racingCountValue => {
  const isNumeric = !isNaN(racingCountValue);
  if (!isNumeric) {
    alert('숫자를 입력해주세요');
  }

  return isNumeric;
};

const isPositive = racingCountValue => {
  const isPos = racingCountValue > 0;
  if (!isPos) {
    alert('1이상의 자연수를 입력해주세요');
  }

  return isPos;
};

const isRacingCountValueValid = racingCountValue =>
  isNumber(racingCountValue) && isPositive(racingCountValue);

export const checkRacingCountInput = user => {
  const racingCountValue = DOM.$racingCountInput.value;

  if (!isRacingCountValueValid(racingCountValue)) {
    DOM.$racingCountInput.value = '';
    return;
  }
  user.racingCount = racingCountValue;
  DOM.$racingCountInput.disabled = true;
  DOM.$racingCountSubmit.disabled = true;

  playGame(user);
};
