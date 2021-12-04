import { makeElement, clearContents } from '../controller/utils.js';

export default function sectionContainer(container) {
  this.initializer = () => {
    clearContents(container);
    const test = makeElement({ id: 'asd', innerHTML: 'section' });
    container.appendChild(test);
  };
}
