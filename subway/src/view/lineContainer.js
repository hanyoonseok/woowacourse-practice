import { makeElement, clearContents, appendChilds } from '../controller/utils.js';
import { makeSelect } from '../controller/template.js';

export default function lineContainer(container) {
  const title = makeElement({ tag: 'p', innerHTML: '노선 이름' });
  const stationNameInput = makeElement({
    tag: 'input',
    type: 'text',
    placeholder: '노선 이름을 입력해주세요',
  });
  const ascendingTitle = makeElement({ tag: 'p', innerHTML: '상행 종점' });
  const ascendingSelect = makeSelect('stations');
  const descendingTitle = makeElement({ tag: 'p', innerHTML: '하행 종점' });
  const descendingSelect = makeSelect('stations');
  const tableTitle = makeElement({ tag: 'p', innerHTML: '지하철 역 목록' });

  this.initializer = () => {
    clearContents(container);
    appendChilds(container, [
      title,
      stationNameInput,
      ascendingTitle,
      ascendingSelect,
      descendingTitle,
      descendingSelect,
    ]);
  };
}
