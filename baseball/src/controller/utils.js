export const $ = id => document.getElementById(id);

export const validation = {
  isNumeric(input) {
    let isNumber = true;
    for (let i = 0; i < input.length; i += 1) {
      if (isNaN(input[i])) {
        isNumber = false;
        alert('숫자가 아닌 문자가 포함되어 있습니다.');
      }
    }

    console.log(isNumber);
    return isNumber;
  },
  isBlankExist(input) {
    let isExist = false;
    if (input.includes(' ')) {
      isExist = true;
      alert('공백이 포함되어있습니다.');
    }

    return isExist;
  },

  isRightLength(input) {
    const isRight = input.length === 3;
    if (!isRight) {
      alert('길이가 3인 숫자를 입력해주세요');
    }

    return isRight;
  },

  isDuplicated(input) {
    const array = input.split('');
    const set = new Set([...array]);
    const isDup = array.length !== set.size;
    if (isDup) {
      alert('중복된 숫자가 존재합니다');
    }
    return isDup;
  },
};
