import myEvent from './../common/MyEvent.js'

class PrimeGenerator extends myEvent{
  constructor(limit){
    super()
    this.generator = this.primeGenerator(limit)
  }

  primeGenerator = function* (limit) {
    if (limit>=2) yield 2
    for (let i = 3; i <= limit; i=i+2) {
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