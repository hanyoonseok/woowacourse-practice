import Inputs from './Inputs/index.js';
import Car from './Car/index.js';
import {playRacing, printWinners} from './utils/index.js'

export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('submit1');
    this.$tryNumSubmit = document.getElementById('submit2');
    this.$carName = document.getElementById('carName');
    this.$tryNum = document.getElementById('tryNum');
    this.$result = document.getElementById('result')
    this.inputs = new Inputs();
    this.winners =[];
    this.addEventListeners();
  }

  addCarNameSubmitEvent() {
    this.$carNameSubmit.addEventListener('click', event => {
      event.preventDefault();
      if (this.inputs.isCarNameValid(this.$carName.value)) {
        this.$carNameSubmit.disabled = true;
      }
    });
  }
  addTryNumSubmitEvent() {
    this.$tryNumSubmit.addEventListener('click', event => {
      event.preventDefault();
      if (this.inputs.isTryNumValid(this.$tryNum.value)) {
        this.$tryNumSubmit.disabled = true;
        this.winners = playRacing(this.$tryNum.value, this.inputs.carNameList, this.$result);
        printWinners(this.winners, this.$result);
      }else{
        alert("1이상의 자연수를 넣어주세요")
      }
    });
  }
  addEventListeners() {
    this.addCarNameSubmitEvent();
    this.addTryNumSubmitEvent();
  }
}

new RacingGame();
