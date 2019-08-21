/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let ns = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (ns[num] !== undefined && i - ns[num] <= k) {
      return true
    }
    ns[num] = i
  }
  return false
}
