export default class RacingGame {
  constructor() {
    this.$carNameSubmit = document.getElementById('submit1');
    this.$tryCountSubmit = document.getElementById('submit2');
    this.$carName = document.getElementById('carName');
    this.$tryCount = document.getElementById('tryCount');
    this.participants = [];
  }
}

new RacingGame();
