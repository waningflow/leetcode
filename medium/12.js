/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let rtn = ''
  var N = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var R = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for (let i = 0; i < N.length; i++) {
    while (num >= N[i]) {
      rtn += R[i]
      num -= N[i]
    }
  }
  return rtn
}

console.log(intToRoman(1994))
