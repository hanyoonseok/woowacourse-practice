const $ = id => document.getElementById(id);
import { tabMenus } from './dom.js';

export default function Start() {
  const $app = $('app');
  //console.log(tabMenus)
  $app.insertAdjacentHTML('beforebegin',tabMenus);
}

Start();
