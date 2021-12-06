const makeRandomNumber = () => MissionUtils.Random.pickNumberInRange(0, 9);

export const moveCar = car => {
  if (makeRandomNumber() >= 4) {
    car.move += 1;
  }
};
