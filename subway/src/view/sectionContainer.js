import { makeElement, clearContents, appendChilds } from '../controller/utils.js';
import { makeLineButtons, setAllMenuButonEvent } from '../controller/sectionManager.js';

export default function sectionContainer(container) {
  const title = makeElement({ tag: 'p', innerHTML: '구간을 수정할 노선을 선택해주세요' });
  const buttons = makeLineButtons();
  const contents = makeElement({tag:'div'})

  this.initializer = () => {
    clearContents(container);
    appendChilds(container, [title, buttons, contents]);
    setAllMenuButonEvent(contents);
  };
}
