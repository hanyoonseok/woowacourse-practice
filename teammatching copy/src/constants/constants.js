export const SELECTOR = {
  app: 'app',
  container: 'container',

  crewTab: 'crew-tab',
  teamTab: 'team-tab',

  radioFrontCourse: 'frontend-course',
  radioBackCourse: 'backend-course',
  crewNameInput: 'crew-name-input',
  crewAddButton: 'add-crew-button',
  crewDeleteButton: 'delete-crew-button',
  crewTable: 'crew-table',
  crewRadioName: 'course',
  crewManageSection: 'crew-manage-section',

  teamResultSection: 'team-result-section',
  courseSelect: 'course-select',
  missionSelect: 'mission-select',
  showMatcherButton: 'show-team-matcher-button',
  memberCountInput: 'team-member-count-input',
  teamMatchButton: 'match-team-button',
  matchResultUL: 'team-match-result',
  rematchButton: 'rematch-team-button',
  teamMatchUL: 'team-match-ul',
};

export const ALERT_MESSAGE = {
  isBlank: '공백이거나 공백이 포함되어 있습니다.',
  isDuplicated: '이미 존재하는 이름입니다.',
  isNotPositive: '1이상의 자연수를 입력해주세요',
  isNotInLength: '5글자 이하의 이름을 작성해주세요.',
  isNotValidCount: '크루원 수보다 큰 숫자를 작성할 수 없습니다.',
};

export const COURSE_OPTIONS = [
  { name: '프론트엔드', value: 'frontend' },
  { name: '백엔드', value: 'backend' },
];

export const MISSION_OPTIONS = [
  { name: '숫자야구게임', value: 'baseball' },
  { name: '자동차경주', value: 'racingcar' },
  { name: '로또', value: 'lotto' },
  { name: '장바구니', value: 'shopping-cart' },
  { name: '결제', value: 'payments' },
  { name: '지하철노선도', value: 'subway' },
  { name: '성능개선', value: 'performance' },
  { name: '배포', value: 'deploy' },
];
