/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 1) return 0;
    let min = Infinity, bestPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i] && i < prices.length - 1) {
            min = prices[i];
        }
        bestPrice = bestPrice < prices[i] - min ? prices[i] - min : bestPrice
    }
    return bestPrice;
};

console.log(maxProfit([2, 4, 1]))  // 2
console.log(maxProfit([3, 2, 6, 5, 0, 3]))  // 4