# 77. Combinations

https://leetcode.com/problems/combinations/

Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.


Example 1:
```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
Example 2:
```
Input: n = 1, k = 1
Output: [[1]]
```

## Solution
note
    - 組合, Cn取k
    - DFS 求解

algo
    - 每回合從 1~n 挑一個數字 ex; 1 -> 2 -> 3...
    - 丟入 subRes[] 當作起點 [i]
    - 當 subRes 長度 = k ，表示已經找到一種組合 => push in res[]
    - 把扣掉起點的 array 再丟入 helper function 中重新遞迴

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    
    const helper = (start, k, res, subRes) => {
        if (subRes.length === k) {
            // array 會有傳址問題，用複製的
            res.push(Array.from(subRes));
            // 這次就結束，return 來跳出
            return null;
        }
        
        for (let i = start; i <= n; i++) {
            // 丟入 subRes[] 當作起點 [1]
            subRes.push(i);
            helper(i+1, k, res, subRes); 
            // 做完之後把當前的起點刪掉，準備下一回合
            subRes.pop()
        }
    }
    const res = [];
    const subRes = [];
    helper(1, k, res, subRes);
    return res;
};
```