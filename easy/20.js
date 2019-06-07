/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let char = {
    '(': 1,
    ')': -1,
    '{': 2,
    '}': -2,
    '[': 3,
    ']': -3
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (char[s[i]] > 0) {
      stack.push(char[s[i]])
    } else {
      if (stack.pop() + char[s[i]] !== 0) {
        return false
      }
    }
  }
  if (stack.length !== 0) {
    return false
  }
  return true
}
