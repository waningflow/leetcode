/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profits = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profits += prices[i] - prices[i - 1]
    }
  }
  return profits
}

let p = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(p))
