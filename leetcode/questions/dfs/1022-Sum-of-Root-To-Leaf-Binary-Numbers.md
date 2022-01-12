# 1022. Sum of Root To Leaf Binary Numbers

https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

The test cases are generated so that the answer fits in a 32-bits integer.

Example 1:

```
Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
```

## Solution

note
- 找到從 root 到 leaf 每一條 path 的 binary 數值總和
- node value: 0 or 1

algo
- 用一個 sum 紀錄總和, path 紀錄當下走的狀況
- dfs 走每一條，不段更新 path
- 當遇到 leaf 的時候把當下 path 轉換成 binary 並加入 sum

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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let sum = 0;
    const dfs = (root, path) => {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            sum += parseInt(path + root.val, 2);
            return;
        }
        dfs(root.left, path + root.val);
        dfs(root.right, path + root.val);
    }
    dfs(root, "");
    return sum;
};
```
