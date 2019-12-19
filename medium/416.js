/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
  let sum = 0
  nums.forEach(v => {
    sum += v
  })
  if (sum % 2 === 1) return false
  sum /= 2
  let dp = Array(sum + 1).fill(false)
  dp[0] = true
  nums.forEach(v => {
    for (let i = sum; i > 0; i--) {
      if (v <= i) {
        dp[i] = dp[i] || dp[i - v]
      }
    }
  })
  return dp[sum]
}

//
// var canPartition = function(nums) {
//   let sum = 0
//   nums.forEach(v => {
//     sum += v
//   })
//   if (sum % 2 === 1) return false
//   sum /= 2

//   let l = nums.length
//   let dp = Array(l + 1).fill(Array(sum + 1).fill(false))
//   dp[0][0] = true
//   for (let i = 1; i < l + 1; i++) {
//     dp[i][0] = true
//   }
//   for (let i = 1; i < l + 1; i++) {
//     for (let j = 1; j < sum + 1; j++) {
//       dp[i][j] = dp[i - 1][j]
//       if (j >= nums[i - 1]) {
//         dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]]
//       }
//     }
//   }
//   return dp[l][sum]
// }

console.log(canPartition([1, 5, 11, 5]))
