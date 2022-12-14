import EventEmitter from 'events'

export default class PrimeGenerator extends EventEmitter{
  constructor(limit=25){
    super()
    this.limit = limit
  }

  start(){
    const generator = this.generate()
    const interval = setInterval(() => {
      const currentNumber = generator.next().value
      if (currentNumber){
        console.log(currentNumber)
        this.emit( "new", currentNumber)
      } else
          clearInterval(interval)
    }, 1000);
  }

  generate = function* () {
    if (this.limit>=2) yield 2
    for (let i = 3; i <= this.limit; i=i+2) {
      if (this.isPrime(i)) yield i;
    }
  }

  isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) 
      if (num % i == 0) return false;

    return true;
  }
}