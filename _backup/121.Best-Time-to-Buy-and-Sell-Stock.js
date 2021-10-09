/**
 * 121. Best Time to Buy and Sell Stock
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * @param {number[]} prices
 * @return {number}
 */

// Q: 找出買賣股票最大利益，何時買與賣 (陣列表示當天的股票價格)
// A: 在每次移動的時候，先找尋最小值(min)，再利用目前的值(prices[i])，去減更新過後的最小值來找最大值(profit)

var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    var min = Math.pow(2,31)-1; //overflows
    var profit = 0;
    for(var i = 0; i < prices.length; i++) {
        min = prices[i] < min ? prices[i] : min;
        profit = prices[i] - min > profit ? prices[i] - min : profit;
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); //0
console.log(maxProfit([1, 2])); //1