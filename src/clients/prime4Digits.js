export function  is4Digits(num){
    const DIGITS = 1
    const lowLimit = 10**(DIGITS-1)
    const highLimit = 10**(DIGITS)

    return (num>=lowLimit && num < highLimit)
}
