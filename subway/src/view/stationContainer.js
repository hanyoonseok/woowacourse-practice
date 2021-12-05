import { makeElement, clearContents, appendChilds } from '../controller/utils.js';
import { addStation, setAllDeleteButonEvent, tableRenewal } from '../controller/stationManager.js';
import { makeTable } from '../controller/template.js';

export default function stationContainer(container) {
  const title = makeElement({ tag: 'p', innerHTML: '역이름' });
  const stationNameInput = makeElement({
    tag: 'input',
    type: 'text',
    placeholder: '역 이름을 입력해주세요',
  });
  const stationNameSubmit = makeElement({ tag: 'button', innerHTML: '역 추가' });

  const tableTitle = makeElement({ tag: 'p', innerHTML: '지하철 역 목록' });
  const table = makeTable('stations', ['역 이름','설정']);

  stationNameSubmit.addEventListener('click', () => {
    const stationName = stationNameInput.value;
    addStation(stationName);
    tableRenewal(table);
    stationNameInput.value='';
  });
  this.initializer = () => {
    clearContents(container);
    appendChilds(container, [title, stationNameInput, stationNameSubmit, tableTitle, table]);
    setAllDeleteButonEvent();
  };
}
