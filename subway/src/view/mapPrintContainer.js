import { makeElement, clearContents } from '../controller/utils.js';

export default function mapPrintContainer(container) {
  this.initializer = () => {
    clearContents(container);
    const test = makeElement({ id: 'asd', innerHTML: 'mapPrint' });
    container.appendChild(test);
  };
}
