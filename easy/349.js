/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let nums = {}
  let rtn = []
  for(let i=0;i<nums1.length;i++){
      nums[nums1[i]] = 1
  }
  for(let i=0;i<nums2.length;i++){
    const num = nums2[i]
    if(nums[num]){
        rtn.push(num)
        nums[num] = 0
    }
  }
  return rtn
};
