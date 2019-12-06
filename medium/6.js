/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s
  }
  const group = 2 * numRows - 2
  let rtn = []
  for (let i = 0; i < numRows; i++) {
    rtn[i] = []
  }
  while (s.length) {
    let str = s.slice(0, group)
    s = s.slice(group)
    let index = 0,
      direction = 1
    for (let i = 0; i < str.length; i++) {
      rtn[index].push(str[i])
      index += direction
      if (index >= numRows) {
        index = numRows - 2
        direction = -1
      }
    }
  }
  let rtnStr = ''
  for (let i = 0; i < numRows; i++) {
    rtnStr += rtn[i].join('')
  }
  return rtnStr
}

// test
const s = 'PAYPALISHIRING',
  numRows = 4

console.log(convert(s, numRows))
