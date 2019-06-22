/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return []
  }
  const rtn = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        rtn.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) {
          left++
        }
        left++
        while (nums[right] === nums[right - 1]) {
          right--
        }
        right--
      } else if (nums[left] + nums[right] + nums[i] < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return rtn
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
