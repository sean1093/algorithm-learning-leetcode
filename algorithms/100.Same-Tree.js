/**
 * 100. Same Tree
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 // Q: 檢查兩個binary tree有沒有一樣
 // A: 先檢查是不是null，接著檢查第一個node的val有沒有一樣，接著使用遞迴分別去檢查兩邊即可
var isSameTree = function(p, q) {
    // both null -> true
    if(p === null && q=== null) {
        return true;
    }

    // check if one of null
    if(p !== null && q=== null || p === null && q !== null) {
        return false;
    }

    // check value
    if(p.val != q.val) {
        return false;
    }
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};


// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

var tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1, tree2)); //true