import View from './view/index.js';
import Controller from './controller/index.js';
import Model from './model/index.js'

const init = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);
};

init();
