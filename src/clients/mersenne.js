export function isMersenne(number){
    for (const n of primeGenerator(number)){
      if (2**n-1 === number){
        console.log("IT'S a MERSENNE NUMBER...")
        return true
      }
    } return false
  }