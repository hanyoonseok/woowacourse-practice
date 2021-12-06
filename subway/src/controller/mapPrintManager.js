import { appendChilds, getAllData, makeElement } from './utils.js';

export const makeContents = contents => {
  const allLine = getAllData('lines');
  allLine.forEach(line => {
    const title = makeElement({ tag: 'p', innerHTML: line.name });
    const stations = line.stations.map(station => makeElement({ tag: 'li', innerHTML: station }));
    contents.appendChild(title);
    appendChilds(contents, stations);
  });
};
