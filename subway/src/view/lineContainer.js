import { makeElement, clearContents, appendChilds } from '../controller/utils.js';
import { makeSelect } from '../controller/template.js';
import {
  makeTable,
  tableRenewal,
  addLine,
  setAllDeleteButonEvent,
} from '../controller/lineManager.js';

export default function lineContainer(container) {
  const title = makeElement({ tag: 'p', innerHTML: '노선 이름' });
  const stationNameInput = makeElement({
    tag: 'input',
    type: 'text',
    placeholder: '노선 이름을 입력해주세요',
    id: 'line-name-input',
  });
  const ascendingTitle = makeElement({ tag: 'p', innerHTML: '상행 종점' });
  const ascendingSelect = makeSelect('stations', 'line-start-station-selector');
  const descendingTitle = makeElement({ tag: 'p', innerHTML: '하행 종점' });
  const descendingSelect = makeSelect('stations', 'line-end-station-selector');
  const lineAddButton = makeElement({
    tag: 'button',
    innerHTML: '노선 추가',
    id: 'line-add-button',
  });
  const tableTitle = makeElement({ tag: 'p', innerHTML: '지하철 노선 목록' });
  const headers = ['노선이름', '상행 종점역', '하행 종점역', '설정'];
  const table = makeTable(headers);

  lineAddButton.addEventListener('click', () => {
    addLine(stationNameInput.value, ascendingSelect.value, descendingSelect.value);
    tableRenewal(table, headers);
    stationNameInput.value = '';
  });

  this.initializer = () => {
    clearContents(container);
    appendChilds(container, [
      title,
      stationNameInput,
      ascendingTitle,
      ascendingSelect,
      descendingTitle,
      descendingSelect,
      lineAddButton,
      tableTitle,
      table,
    ]);
    setAllDeleteButonEvent(headers);
  };
}
