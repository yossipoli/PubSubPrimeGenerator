export default function  is4Digits(num){
    const DIGITS = 1
    const lowLimit = 10**(DIGITS-1)
    const highLimit = 10**(DIGITS)

    if (num>=lowLimit && num < highLimit) console.log(10000 - num, 'is 10,000 - ', num)
}
