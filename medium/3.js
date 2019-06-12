/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0
  let res = 0
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > -1) {
      for (let j = start; j < map[s[i]]; j++) {
        delete map[s[j]]
      }
      start = map[s[i]] + 1
    }
    map[s[i]] = i
    let l = i - start + 1
    res = Math.max(res, l)
  }
  return res
}

console.log(lengthOfLongestSubstring('abba'))
