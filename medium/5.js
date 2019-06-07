/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let result = { pos: 0, len: 0 }
  for (let i = 0; i < s.length; i++) {
    let l1 = getLen(s, i, i)
    let l2 = getLen(s, i, i + 1)
    let l = Math.max(l1, l2)
    if (l > result.len) {
      result.pos = i
      result.len = l
    }
  }
  let start = result.pos - Math.floor((result.len - 1) / 2)
  return s.substr(start, result.len)

  function getLen(str, left, right) {
    let l = left
    let r = right
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--
      r++
    }
    return r - l - 1
  }
}
