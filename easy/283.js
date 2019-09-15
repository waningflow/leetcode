/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j += 1
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
}

let ns = [0, 1, 0, 3, 12]
moveZeroes(ns)
console.log(ns)
