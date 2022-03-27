# 997. Find the Town Judge

https://leetcode.com/problems/find-the-town-judge/

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2

Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:

Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3

## Solution

### Notes
- 題意：找出被大家相信的 judge，但這個 judge 不相信任何人
- 轉化成一張有向圖：
    - judge node 有來自所有其他點的 input (input = n-1)
    - judge node 沒有任何 output (output = 0)

```js
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const output = new Array(n+1).fill(0);
    const input = new Array(n+1).fill(0);
    
    for (let i=0; i<trust.length; i++) {
        output[trust[i][0]] ++;
        input[trust[i][1]] ++;
    }
    // find input is n -1
    const judgeIdx = input.findIndex((t, idx) => idx > 0 && t === n-1);
    
    // check output is 0
    const judge = output[judgeIdx] === 0 ? judgeIdx : -1;
     
    return judge;
};
```
