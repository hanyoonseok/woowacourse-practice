import { $, appendChilds } from '../controller/utils.js';
import { stationView } from './stationView.js';
import { lineView } from './lineView.js';
import { sectionView } from './sectionView.js';
import { mapPrintView } from './mapPrintView.js';

export const attachButtonsInView = buttonsArray => {
  const $container = $('container');
  appendChilds($container, buttonsArray);
};

export const showContentsByName = name => {
  if (name === 'station') {
    stationView();
  } else if (name === 'line') {
    lineView();
  } else if (name === 'section') {
    sectionView();
  } else if (name === 'mapPrint') {
    mapPrintView();
  }
};
