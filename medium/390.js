/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let a = []
  for (let i = 0; i < n; i++) {
    a.push(i + 1)
  }
  let right = true
  while (a.length > 1) {
    let b = a
    a = []
    for (let i = 0; i < b.length; i++) {
      if (i % 2 === 1) {
        if (right) {
          a.push(b[i])
        } else {
          a.unshift(b[b.length - 1 - i])
        }
      }
    }
    right = !right
  }
  return a[0]
}

// test
console.log(lastRemaining(10000000))
