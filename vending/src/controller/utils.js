import { ALERT_MESSAGE } from '../constants/constants.js';

export const $ = id => document.getElementById(id);

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

  isMultipleOf10(input) {
    const isMultiple = input.value % 10 === 0;
    if (!isMultiple) {
      alertMessage(input, ALERT_MESSAGE.isNotMultipleOf10);
    }

    return isMultiple;
  },

  isBiggerThan100(input) {
    const isBigger = input.value >= 100;
    if (!isBigger) {
      alertMessage(input, ALERT_MESSAGE.isNotBiggerThan100);
    }

    return isBigger;
  },

  isDuplicated(array, input) {
    const isDuplicate = array.includes(input.value);
    if (isDuplicate) {
      alert(`중복된 ${input.placeholder}이 존재합니다`);
    }

    return isDuplicate;
  },

  isInputNumberValid(input) {
    const isValid = this.isPositiveNumber(input) && !this.isBlankExist(input);

    return isValid;
  },

  isProductInfoValid(allProductsName, productName, productPrice, productQuantity) {
    return (
      !this.isBlankExist(productName) &&
      !this.isDuplicated(allProductsName, productName) &&
      !this.isBlankExist(productPrice) &&
      this.isPositiveNumber(productPrice) &&
      this.isBiggerThan100(productPrice) &&
      this.isMultipleOf10(productPrice) &&
      !this.isBlankExist(productQuantity) &&
      this.isPositiveNumber(productQuantity)
    );
  },

  isChargeInputValid(chargeInput) {
    return this.isInputNumberValid(chargeInput) && this.isMultipleOf10(chargeInput);
  },
};

export const onKeyUpOnlyNumberRegex = input => (input.value = input.value.replace(/[^0-9]/g, ''));
