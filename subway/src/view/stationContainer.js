import { makeElement } from '../controller/utils.js';

export default function stationContainer(container) {
    const title = makeElement({tag:'p', innerHTML:'역이름'});
    const stationNameInput = makeElement({tag:'input', type:'text', placeholder:'역 이름을 입력해주세요'});
    const tableTitle = makeElement({tag:'p', innerHTML:'지하철 역 목록'});

    this.initializer = () => {
    const test = makeElement({ id: 'asd', innerHTML: 'station' });
    container.appendChild(test);
  };
}
