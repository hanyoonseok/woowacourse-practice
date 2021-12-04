import { makeElement, clearContents, appendChilds } from '../controller/utils.js';
import { makeTable, addStation } from '../controller/stationManager.js';

export default function stationContainer(container) {
  const title = makeElement({ tag: 'p', innerHTML: '역이름' });
  const stationNameInput = makeElement({
    tag: 'input',
    type: 'text',
    placeholder: '역 이름을 입력해주세요',
  });
  const stationNameSubmit = makeElement({ tag: 'button', innerHTML: '역 추가' });
  stationNameSubmit.addEventListener('click', () => {
    const stationName = stationNameInput.value;
    addStation(stationName);
  })
  const tableTitle = makeElement({ tag: 'p', innerHTML: '지하철 역 목록' });
  const table = makeTable();
  this.initializer = () => {
    clearContents(container);
    const contents = makeElement({ id: 'contents' });
    appendChilds(contents, [title, stationNameInput, stationNameSubmit, tableTitle, table]);
    container.appendChild(contents);
  };
}
