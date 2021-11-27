export default class Inputs {
  constructor() {
    this.carNameList = [];
    this.tryNum = 0;
  }
  isLengthInRange(carNameList) {
    let isValid = true;
    carNameList.map(x => {
      if (x.length > 5) {
        isValid = false;
      }
    });
    return isValid;
  }
  isCarNameValid(carNameValue) {
    let isValid = true;
    const noBlankCarNames = carNameValue.replace(/(\s*)/g, '');
    const carNameList = noBlankCarNames.split(',');
    if (this.isLengthInRange(carNameList)) {
      this.carNameList = carNameList;
    } else {
      alert('자동차 이름을 5자 이하로 입력해주세요');
      isValid = false;
    }
    return isValid;
  }
  isNumeric(tryNumValue) {
    let isValid = true;
    let i;
    for (i = 0; i < tryNumValue.length; i += 1) {
      if (isNaN(tryNumValue[i])) {
        isValid = false;
      }
    }
    return isValid;
  }
  isTryNumValid(tryNumValue) {
    let isValid = true;
    if (!this.isNumeric(tryNumValue)) {
      isValid = false;
    }
    return isValid;
  }
}
