import isEnds1 from "./clients/ends1Prime.js";
import isMersenne from "./clients/mersenne.js";
import isNDigits from "./clients/primeNDigits.js";
import PrimeGenerator from "./publisher/primeGenerator.js";

const run = (limit = 25) => {
    const generator = new PrimeGenerator(limit)
    generator.on("new", (num)=> isMersenne(num))
    generator.on("new", (num)=> isNDigits(num))
    generator.on("new", (num)=> isEnds1(num))

    generator.start()
}

export default run