export default function isMersenne(num) {
  const log = Math.log2(num+1)
  log === parseInt(log) && console.log(`${num} is a Mersenne Prime`)
}
