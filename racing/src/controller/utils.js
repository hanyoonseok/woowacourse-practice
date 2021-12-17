import { GAME_RULE, ALERT_MESSAGE } from '../constants/index.js';

export const $ = id => document.getElementById(id);

export const validation = {
  isNameInLength(carNamesInputArray) {
    let isInLength = true;
    carNamesInputArray.forEach(name => {
      if (name.length > GAME_RULE.maxNameLength) {
        isInLength = false;
        alert(ALERT_MESSAGE.nameNotInLength);
      }
    });

    return isInLength;
  },
  isBlankExistInArray(carNamesInputArray) {
    let isExist = false;
    carNamesInputArray.forEach(name => {
      if (name === '' || name.includes(' ')) {
        isExist = true;
        alert(ALERT_MESSAGE.blankExist);
      }
    });

    return isExist;
  },

  isBlankExist(racingCount) {
    let isExist = racingCount === '' || racingCount.includes(' ');
    if (isExist) {
      alert(ALERT_MESSAGE.blankExist);
    }

    return isExist;
  },

  isDuplicatedNameExist(carNamesInputArray) {
    const newSet = new Set([...carNamesInputArray]);
    const isDuplicated = carNamesInputArray.length !== newSet.size;
    if (isDuplicated) {
      alert(ALERT_MESSAGE.duplicatedName);
    }

    return isDuplicated;
  },

  isPositiveNumber(racingCount) {
    const isPositive = parseInt(racingCount) > 0;
    if (!isPositive) {
      alert(ALERT_MESSAGE.notPositiveNumber);
    }

    return isPositive;
  },
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
