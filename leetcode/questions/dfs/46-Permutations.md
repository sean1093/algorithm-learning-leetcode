# 46. Permutations

https://leetcode.com/problems/permutations/

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```
Example 2:
```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```
Example 3:
```
Input: nums = [1]
Output: [[1]]
```

## Solution

note
    - 排列
    - DFS 求解

algo
    - 每回合從 1~n 挑一個數字 ex; 1 -> 2 -> 3...
    - 如果已經走過visited[i]==1，直接忽略
    - 丟入 subRes[] 當作起點 [i]
    - 設定 visited[i]=1
    - 當 subRes 長度 = k ，表示已經找到一種組合 => push in res[]
    - 把扣掉起點的 array 再丟入 helper function 中重新遞迴
    - 把 visited[i]=0 設定回來，因為排列之後要可以排重複的1,2,3 -> 2,1,3 這時候要重選 1

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const helper = (nums, res, subRes, visited) => {
        // 當 subRes 長度 = k ，表示已經找到一種組合 => push in res[]
        if (subRes.length === nums.length) {
            // array 會有傳址問題，用複製的
            res.push(Array.from(subRes));
            // 這次就結束，return 來跳出
            return null;
        }
        
        for (let i = 0; i < nums.length; i++) {
            // 如果已經走過visited[i]==1，直接忽略
            if (visited[i] == 1) continue;
            // 設定 visited[i]=1
            visited[i] = 1;
            // 丟入 subRes[] 當作起點 [1]
            subRes.push(nums[i]);
            helper(nums, res, subRes, visited); 
            // 做完之後把當前的起點刪掉，準備下一回合
            subRes.pop();
            visited[i] = 0;
        }
    }
    const visited = (new Array(nums.length)).fill(0);
    const res = [];
    const subRes = [];
    helper(nums, res, subRes, visited);
    return res;
};
```