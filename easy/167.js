/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let diff = numbers[left] + numbers[right] - target
    if (diff > 0) {
      right--
    } else if (diff < 0) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
