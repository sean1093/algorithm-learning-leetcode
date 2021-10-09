/**
 * 122. Best Time to Buy and Sell Stock II
 * @param {number[]} prices
 * @return {number}
 */
// Q: 找出最大利益，可以多次買賣股票，但是一定要先買了才可以賣
// A: greedy: 每次隔天價格有漲就賣掉，而且只買隔天有漲的前一天
// ex: 7,1,4,2,6 ==> 1的時候發現隔天會漲價，所以買進，到隔天4的時候賣出，4的時候就不買，因為隔天會跌價
//     等到2的時候再買，6的時候賣出，就可以得到 max = (4-1) + (6-2) = 7 
//     
//          /\
//         /  \      /
//      /\/    \  /\/
//     /        \/
// 由上圖可得知，只要全部都取有增長的部分就一定會是最大值
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    var max = 0;
    var profit = 0;
    for(var i = 0; i < prices.length; i++) {
        max += prices[i] > prices[i - 1] ? prices[i] - prices[i - 1] : 0;
    }
    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //7
console.log(maxProfit([7, 1, 3, 5, 6])); //5
console.log(maxProfit([1, 2])); //1