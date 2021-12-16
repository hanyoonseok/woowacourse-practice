import { ALERT_MESSAGE } from '../constants/constants.js';

export const $ = id => document.getElementById(id);

export const validation = {
  isNumeric(input) {
    let isNumber = true;
    for (let i = 0; i < input.length; i += 1) {
      if (isNaN(input[i])) {
        isNumber = false;
        alert(ALERT_MESSAGE.isNumeric);
      }
    }

    return isNumber;
  },
  isBlankExist(input) {
    let isExist = false;
    if (input.includes(' ')) {
      isExist = true;
      alert(ALERT_MESSAGE.isBlankExist);
    }

    return isExist;
  },

  isRightLength(input) {
    const isRight = input.length === 3;
    if (!isRight) {
      alert(ALERT_MESSAGE.isRightLength);
    }

    return isRight;
  },

  isDuplicated(input) {
    const array = input.split('');
    const set = new Set([...array]);
    const isDup = array.length !== set.size;
    if (isDup) {
      alert(ALERT_MESSAGE.isDuplicated);
    }

    return isDup;
  },
};
