import { ALERT_MESSAGE } from '../model/constants.js';

export const $ = id => document.getElementById(id);

const alertMessage = (input, message) => alert(`${input.placeholder}에 ${message}`);

const clearInputAndFocus = input => {
  input.value = '';
  input.focus();
};

export const validation = {
  isBlankExist(input) {
    const isIncludeBlank = input.value === '' || input.value.includes(' ');
    if (isIncludeBlank) {
      alertMessage(input, ALERT_MESSAGE.isBlank);
      clearInputAndFocus(input);
    }

    return isIncludeBlank;
  },

  isExistStation(stations, station) {
    const isExist = stations.find(e => e === station.value);
    if (!isExist) {
      alertMessage(station, ALERT_MESSAGE.isNotExistStation);
      clearInputAndFocus(station);
    }

    return isExist;
  },

  isSameWithDepartAndArrive(depart, arrive) {
    const isSame = depart.value === arrive.value;
    if (isSame) {
      alert(ALERT_MESSAGE.isSameWithDepartAndArrive);
      clearInputAndFocus(depart);
      clearInputAndFocus(arrive);
    }

    return isSame;
  },

  handleQueue(lines, info, arrive) {
    const station = info.queue[0];
    info.queue.splice(0, 1);
    lines.forEach(line => {
      if (line.depart === station && line.arrive === arrive.value) {
        info.isPossible = true;
      } else if (line.depart === station && !info.checked.find(e => e === line.arrive)) {
        info.queue.push(line.arrive);
        info.checked.push(line.arrive);
      }
    });
  },

  isPossibleRoute(lines, depart, arrive) {
    const info = { isPosibble: false, queue: [depart.value], checked: [depart.value] };
    while (info.queue.length !== 0) {
      this.handleQueue(lines, info, arrive);
      if (info.isPossible) break;
    }
    if (!info.isPossible) alert(ALERT_MESSAGE.isNotPossibleLine);

    return info.isPossible;
  },

  isLengthOver2(depart, arrive) {
    const isOver2 = depart.value.length >= 2 && arrive.value.length >= 2;

    if (!isOver2) {
      alert(ALERT_MESSAGE.isNotOver2);
      clearInputAndFocus(depart);
      clearInputAndFocus(arrive);
    }

    return isOver2;
  },
};

export const onKeyUpNumericEvent = input => (input.value = input.value.replace(/[^0-9]/g, ''));
