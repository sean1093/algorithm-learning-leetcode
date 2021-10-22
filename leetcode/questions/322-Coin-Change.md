# 322. Coin Change

https://leetcode.com/problems/coin-change/

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:
```
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
```
Example 2:
```
Input: coins = [2], amount = 3
Output: -1
```
Example 3:
```
Input: coins = [1], amount = 0
Output: 0
```
Example 4:
```
Input: coins = [1], amount = 1
Output: 1
```
Example 5:
```
Input: coins = [1], amount = 2
Output: 2
``` 

Constraints:
```
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

## Solution

note
- 找 fewest number of coins
- coins not sort

test
- test1: coins = [1,2,5], amount = 11
    - 5,5,2 ==> 3

- test2: coins = [2,5,10], amount = 16
    - 10,5,2 ==> x
    - 10,2,2,2 ==> 4

algo
- 不能使用 Greedy 不然會出現 test2 狀況，選了 5 但其實是錯的
- 使用 dp[i] 代表組合成當前這個數字所需要的最小硬幣總數
- 拆解問題成子問題：
    - 目標要找：dp[amount]
    - dp[amount] = 1(使用一個k面額硬幣) + dp[amount - k]
    - 如果總共面額有 [k1, k2, k3]
    - dp[amount] 會是 1+dp[amount-k1], 1+dp[amount-k2], 1+dp[amount-k3] 的最小值
        - 因為嘗試任一總組合
- 公式可以寫成: dp[i] = min(dp[i-k]+1)
    - for coins k ==> dp[i] = min(dp[i], dp[i-k]+1)

```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let max = amount + 1;             
    const dp = new Array(max);  
    dp.fill(max);  
    dp[0] = 0;  
    
    for (let i = 1; i <= amount; i++) {
        for (let k = 0; k < coins.length; k++) {
            if (coins[k] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[k]] + 1);
            }
        }
    }
    
    // if dp[amount] still is max ==> not found
    return dp[amount] > amount ? -1 : dp[amount];
};
```
