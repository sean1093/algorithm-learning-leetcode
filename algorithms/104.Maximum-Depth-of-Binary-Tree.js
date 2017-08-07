/**
 * 104. Maximum Depth of Binary Tree
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * @param {TreeNode} root
 * @return {number}
 */
// Q: 找 tree 的最大深度
// A: 使用遞迴，分別找左右兩邊的最大值，回傳最大的那邊，就可以找到這個 tree 的最大深度了

var maxDepth = function(root) {
    
    if(!root) {
        return 0;
    }   
    var l = 1;
    var r = 1;
    
    if(root.right !== null) {
        r += maxDepth(root.right);
    }
    if(root.left !== null) {
        l += maxDepth(root.left);
    }
    
    return  l > r ? l : r ;
};