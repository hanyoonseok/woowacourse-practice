import { ALERT_MESSAGE } from '../model/constants.js';

export const $ = id => document.getElementById(id);

const alertMessage = (input, message) => alert(`${input.placeholder}에 ${message}`);

const getItemOrArray = key => JSON.parse(localStorage.getItem(key)) || [];

export const validation = {
  isBlankExist(input) {
    const isIncludeBlank = input.value === '' || input.value.includes(' ');
    if (isIncludeBlank) {
      alertMessage(input, ALERT_MESSAGE.isBlank);
    }

    return isIncludeBlank;
  },

  isExistStation(stations, station) {
    const isExist = stations.find(e => e === station.value);
    if (!isExist) {
      alertMessage(station, ALERT_MESSAGE.isNotExistStation);
    }

    return isExist;
  },

  isSameWithDepartAndArrive(depart, arrive) {
    const isSame = depart.value === arrive.value;
    if (isSame) {
      alert(ALERT_MESSAGE.isSameWithDepartAndArrive);
    }

    return isSame;
  },

  isPossibleRoute(lines, depart, arrive) {
    let isPossible = false;
    let queue = [depart.value];
    let alreadyCheck = [depart.value];
    while (queue.length !== 0) {
      let isFound = false;
      const station = queue[0];
      queue.splice(0, 1);
      lines.forEach(line => {
        if (line.depart === station && line.arrive === arrive.value) {
          isPossible = true;
        } else if (line.depart === station && !alreadyCheck.find(e => e === line.arrive)) {
          queue.push(line.arrive);
          alreadyCheck.push(line.arrive);
        }
      });
      if (isFound) break;
    }

    if (!isPossible) {
      alert(ALERT_MESSAGE.isNotPossibleLine);
    }
    return isPossible;
  },
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
