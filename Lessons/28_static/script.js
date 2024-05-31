class HI {
  static count = 0;
  constructor() {
    HI.count++;
  }
}

const joe = new HI();
const joe2 = new HI();
const joe3 = new HI();
console.log(HI.count);
