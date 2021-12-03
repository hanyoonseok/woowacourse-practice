import { $, makeElement, appendChilds } from './controller/utils.js';
import { STATION_CONSTANTS } from './model/constants.js';
import {viewContainers} from './view/index.js';

const stationManagerButton = makeElement({
  tag: 'button',
  innerHTML: STATION_CONSTANTS.STATION_MANAGER_BUTTON_TEXT,
  id: STATION_CONSTANTS.STATION_MANAGER_BUTTON_ID,
});
const lineManagerButton = makeElement({
    tag: 'button',
    innerHTML: STATION_CONSTANTS.STATION_MANAGER_BUTTON_TEXT,
    id: STATION_CONSTANTS.STATION_MANAGER_BUTTON_ID,
  });
const app = $('app');
const container = makeElement({ id: 'container' });
const buttonContainer = makeElement({ tag: 'div' });

class Subway {
  constructor() {
    this.initButtons();
    this.initContainers();
  }
  initButtons() {
    stationManagerButton.addEventListener('click', () =>
      new viewContainers.stationContainer(container).initializer(),
    );
    lineManagerButton.addEventListener('click', () =>
      new viewContainers.lineContainer(container).initializer(),
    );
  }

  initContainers() {
    appendChilds(buttonContainer, [stationManagerButton, lineManagerButton])
    appendChilds(app, [buttonContainer, container]);
  }
}

new Subway();
