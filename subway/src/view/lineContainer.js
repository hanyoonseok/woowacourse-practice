import { makeElement } from '../controller/utils.js';

export default function lineContainer(container) {
  this.initializer = () => {
    const test = makeElement({id:'asd', innerHTML:'line'});
    container.appendChild(test)
  };
}
