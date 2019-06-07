class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if len(prices) == 0:
            return 0

        profits = [0]
        min = prices[0]
        for i in range(1, len(prices)):
            profits.append(prices[i] - min)
            if prices[i] < min:
                min = prices[i]

        return max(profits)
