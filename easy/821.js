/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const rtn = []
  let index = -Infinity
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      index = i
    }
    rtn.push(i - index)
  }
  index = Infinity
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] === C) {
      index = i
    }
    rtn[i] = Math.min(index - i, rtn[i])
  }
  return rtn
}

// test
const S = 'loveleetcode',
  C = 'e'
console.log(shortestToChar(S, C))
