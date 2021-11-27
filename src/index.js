export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('submit1');
    this.$tryCountSubmit = document.getElementById('submit2');
    this.$carName = document.getElementById('carName');
    this.$tryCount = document.getElementById('tryCount');
    this.participants = [];
    this.addEventListeners();
  }

  isLengthInRange(str){
    return str.length <= 5;
  }
  isCarNameValid(){
      const noBlankCarNames = this.$carName.value.replace(/(\s*)/g, "")
      const carNameList = noBlankCarNames.split(',');
      carNameList.map(x =>{
          if(!this.isLengthInRange(x)){
              alert("자동차 이름을 5자 이하로 입력해주세요")
          }
      })
      console.log(carNameList)
      
  }
  getCarNameList(){
      return [];
  }
  addCarNameSubmitEvent(){
    this.$carNameSubmit.addEventListener('click', event =>{
        event.preventDefault();
        if(this.isCarNameValid()){
            this.participants = this.getCarNameList();
        }
    })
  }
  addTryCountSubmitEvent(){

  }
  addEventListeners(){
      this.addCarNameSubmitEvent();
      this.addTryCountSubmitEvent();
  }
}

new RacingGame();
