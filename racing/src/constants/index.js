export const SELECTOR = {
  carNameInput: 'car-names-input',
  carNameSubmit: 'car-names-submit',
  racingCountInput: 'racing-count-input',
  racingCountSubmit: 'racing-count-submit',
  racingWinner: 'racing-winners',
};

export const GAME_RULE = {
  randomMinRange: 0,
  randomMaxRange: 9,
  moveCondition: 4,
  maxNameLength: 5,
};

export const ALERT_MESSAGE = {
  nameNotInLength: '자동차 이름을 5자 이내로 작성해주세요',
  blankExist: '공백을 제거해주세요.',
  duplicatedName: '중복된 자동차 이름이 있습니다.',
  notPositiveNumber: '1이상의 자연수를 입력해주세요.',
  notNumeric: '숫자가 아닌 문자가 포함되어있습니다.',
};
