import { $, makeElement, appendChilds } from './controller/utils.js';
import { STATION_CONSTANTS } from './model/constants.js';
import { viewContainers } from './view/index.js';

const app = $('app');
const container = makeElement({ id: 'container' });
const buttonContainer = makeElement({ tag: 'div' });
const stationManagerButton = makeElement({
  tag: 'button',
  innerHTML: STATION_CONSTANTS.STATION_MANAGER_BUTTON_TEXT,
  id: STATION_CONSTANTS.STATION_MANAGER_BUTTON_ID,
});
const lineManagerButton = makeElement({
  tag: 'button',
  innerHTML: '2. 노선 관리',
  id: 'line-manager-button',
});
const sectionManagerButton = makeElement({
  tag: 'button',
  innerHTML: '3. 구간 관리',
  id: 'section-manager-button',
});
const mapPrintManagerButton = makeElement({
  tag: 'button',
  innerHTML: '4. 지하철 노선도 출력',
  id: 'map-print-manager-button',
});

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
    sectionManagerButton.addEventListener('click', () =>
      new viewContainers.sectionContainer(container).initializer(),
    );
    mapPrintManagerButton.addEventListener('click', () =>
      new viewContainers.mapPrintContainer(container).initializer(),
    );
  }

  initContainers() {
    appendChilds(buttonContainer, [
      stationManagerButton,
      lineManagerButton,
      sectionManagerButton,
      mapPrintManagerButton,
    ]);
    appendChilds(app, [buttonContainer, container]);
  }
}

new Subway();
