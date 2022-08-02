import { isEnd1 } from "./clients/end1Prime.js";
import { isMersenne } from "./clients/mersenne.js";
import { is4Digits } from "./clients/prime4Digits.js";
import PrimeGenerator from "./publisher/primeGenerator.js";

const run = (limit = 25) => {
    const generator = new PrimeGenerator(limit)
    generator.on("new", (num)=> isMersenne(num))
    generator.on("new", (num)=> is4Digits(num))
    generator.on("new", (num)=> isEnd1(num))

    generator.generate(limit)
}

export default run