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
  isBlankExist(carNamesInputArray) {
    let isExist = false;
    carNamesInputArray.forEach(name => {
      if (name === '' || name.includes(' ')) {
        isExist = true;
        alert(ALERT_MESSAGE.blankExist);
      }
    });

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
};
