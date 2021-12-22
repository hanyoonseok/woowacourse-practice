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
  isPositive(input) {
    const isPos = parseInt(input) >= 1;
    if (!isPos) {
      alert(ALERT_MESSAGE.isNotPositive);
    }

    return isPos;
  },
  isValidNumber(input, length) {
    const isValid = parseInt(input) <= parseInt(length);
    if (!isValid) {
      alert(ALERT_MESSAGE.isNotValidCount);
    }

    return isValid;
  },
  isCountValid(input, length) {
    const isValid =
      !this.isBlankExist(input) && this.isPositive(input) && this.isValidNumber(input, length);
    return isValid;
  },
};

export const onKeyUpOnlyNumberRegex = input => (input.value = input.value.replace(/[^0-9]/g, ''));
