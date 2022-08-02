import myEvent from './../common/MyEvent.js'

class Primary extends myEvent{
  constructor(limitNumber){
    this.number = limitNumber
  }

  primeGenerator() {
    if (this.number>=2) yield 2
    for (let i = 3; i <= this.number; i=i+2) {
      if (this.isPrime(i)) yield i;
    }
  }

  isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }
}