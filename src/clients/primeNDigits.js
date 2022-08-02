export default function  isNDigits(num){
    const DIGITS = 3
    const lowLimit = 10**(DIGITS-1)
    const highLimit = 10**(DIGITS)

    if (num>=lowLimit && num < highLimit) console.log(`${highLimit - num} = ${highLimit} -  ${num}`)
}
