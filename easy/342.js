/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 1) return true
  if (num < 4) return false
  if ((num & (num - 1)) !== 0) return false
  return num & 0x55555555
}
