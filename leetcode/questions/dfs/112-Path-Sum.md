# 112. Path Sum

https://leetcode.com/problems/path-sum/

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
```

## Solution

- 找出這個 tree 有沒有符合 targetSum -> root to leaf 加總
- binary tree，node 可能為空
- 可能 value 或 targetSum 都會有負值

### algo

- DFS 一段一段找符合的路徑
- code
    - if root is null
        - return false
    - if root 沒有 child 
        - return targetSum 是不是等於 root.value
    - 剩下就判斷只要左右邊任一達成條件即可

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const dfs = (root, target) => {
        if (!root) {
            return false;
        }
        if (!root.left && !root.right) {
            return target - root.val === 0;
        }
        return dfs(root.left, target - root.val) || dfs(root.right, target - root.val);
    };
    return dfs(root, targetSum);
};
```

Time: O(n)
