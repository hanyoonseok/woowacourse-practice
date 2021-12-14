export default class Model {
  constructor() {
    this.stations = ['교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'];
    this.lines = [
      { name: '2호선', depart: '교대', arrive: '강남', cost: [2, 3] },
      { name: '2호선', depart: '강남', arrive: '교대', cost: [2, 3] },
      { name: '2호선', depart: '강남', arrive: '역삼', cost: [2, 3] },
      { name: '2호선', depart: '역삼', arrive: '강남', cost: [2, 3] },

      { name: '3호선', depart: '교대', arrive: '남부터미널', cost: [3, 2] },
      { name: '3호선', depart: '남부터미널', arrive: '교대', cost: [2, 3] },
      { name: '3호선', depart: '남부터미널', arrive: '양재', cost: [6, 5] },
      { name: '3호선', depart: '양재', arrive: '남부터미널', cost: [6, 5] },
      { name: '3호선', depart: '양재', arrive: '매봉', cost: [1, 1] },
      { name: '3호선', depart: '매봉', arrive: '양재', cost: [1, 1] },

      { name: '신분당선', depart: '강남', arrive: '양재', cost: [2, 8] },
      { name: '신분당선', depart: '양재', arrive: '강남', cost: [2, 8] },
      { name: '신분당선', depart: '양재', arrive: '양재시민의숲', cost: [10, 3] },
      { name: '신분당선', depart: '양재시민의숲', arrive: '양재', cost: [10, 3] },
    ];
  }
}
