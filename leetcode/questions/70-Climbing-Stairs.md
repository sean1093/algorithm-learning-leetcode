# 70. Climbing Stairs

https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

 
Example 1:
```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
Example 2:
```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

Constraints:

`1 <= n <= 45`

## Solution

note
- 1 step / 2 steps
- n =1 => 1

algo
- foreach 0~n
- n = n-1 + n-2

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0 || n === 1) return 1;   
    let n1 = 1;
    let n2 = 2;    
    for (let i = 3; i <= n; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n2; 
};

```