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
    const noBlankCarNames = carNameValue.replace(/(\s*)/g, '');
    const carNameList = noBlankCarNames.split(',');
    if (this.isLengthInRange(carNameList)) {
      this.carNameList = carNameList;
      console.log(this.carNameList);
    } else {
      alert('자동차 이름을 5자 이하로 입력해주세요');
    }
  }
}
