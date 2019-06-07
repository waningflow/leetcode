/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let si = 0
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] !== nums[si]) {
      si++
      nums[si] = nums[i]
    }
  }
  return si + 1
}

let list = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let l = removeDuplicates(list)
console.log(l)
console.log(list)
