class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}
        arr_length = len(nums)
        for index in range(arr_length):
            diff = target - nums[index]
            if (diff in num_dict) and (index != num_dict[diff]):
                return [index, num_dict[diff]]
            num_dict[nums[index]] = index

