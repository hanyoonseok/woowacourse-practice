import { ALERT_MESSAGE } from '../constants/constants.js';

export const $ = id => document.getElementById(id);

export const validation = {
  isCrewNameValid(crew, crewList) {
    return (
      !this.isBlankExist(crew) && !this.isDuplicatedName(crew, crewList) && this.isInLength(crew)
    );
  },
  isBlankExist(input) {
    const isExist = input === '' || input.includes(' ');
    if (isExist) {
      alert(ALERT_MESSAGE.isBlank);
    }

    return isExist;
  },
  isDuplicatedName(input, list) {
    const isDuplicated = list.includes(input);
    if (isDuplicated) {
      alert(ALERT_MESSAGE.isDuplicated);
    }

    return isDuplicated;
  },
  isInLength(input) {
    const isValid = input.length <= 5;
    if (!isValid) {
      alert(ALERT_MESSAGE.isNotInLength);
    }

    return isValid;
  },
};
