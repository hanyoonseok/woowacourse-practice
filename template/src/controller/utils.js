import { ALERT_MESSAGE } from "../constants/constants.js";

export const $ = id => document.getElementById(id);

export const onKeyUpOnlyNumberRegex = input => (input.value = input.value.replace(/[^0-9]/g, ''));

const alertMessage = (input, message) => alert(`${input.placeholder}에 ${message}`);

export const validation = {
  isBlankExist(input) {
    const isIncludeBlank = input.value === '' || input.value.includes(' ');
    if (isIncludeBlank) {
      alertMessage(input, ALERT_MESSAGE.isBlankExist);
    }

    return isIncludeBlank;
  },

  isPositiveNumber(input) {
    const isPositive = input.value >= 1;
    if (!isPositive) {
      alertMessage(input, ALERT_MESSAGE.isNotPositive);
    }

    return isPositive;
  },

};