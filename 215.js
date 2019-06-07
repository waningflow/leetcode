/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	console.log(nums, k)
	if(nums.length === 1){
		return nums[0]
	}
    let baseIndex = Math.floor(nums.length * Math.random())
    let left = []
    let right = []
    for(let i=0;i<nums.length;i++){
    	if(i === baseIndex){
    		continue
    	}
    	if(nums[i] >= nums[baseIndex]){
    		left.push(nums[i])
    	}else{
    		right.push(nums[i])
    	}
    }
    if(left.length >= k){
    	return findKthLargest(left, k)
    }else if(left.length === k-1){
    	return nums[baseIndex]
    }else{
    	return findKthLargest(right, k-left.length-1)
    }
};

console.log(findKthLargest([3,2,1,5,6,4], 2))