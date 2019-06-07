/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  let res = Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    let temp = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && res[j] + 1 > temp) {
        temp = res[j] + 1
      }
    }
    res[i] = temp
  }
  return Math.max(...res)
}
