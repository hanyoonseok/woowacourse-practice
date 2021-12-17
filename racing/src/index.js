import View from './view/index.js';
import Controller from './controller/index.js';

const startRacing = () => {
  const view = new View();
  const controller = new Controller(view);
};

startRacing();
