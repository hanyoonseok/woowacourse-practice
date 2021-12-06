import { makeElement, clearContents } from '../controller/utils.js';
import { makeContents } from '../controller/mapPrintManager.js';

export default function mapPrintContainer(container) {
  const contents = makeElement({ tag: 'div', className: 'map' });
  makeContents(contents);
  this.initializer = () => {
    clearContents(container);
    container.appendChild(contents);
  };
}
