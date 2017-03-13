/**
 * 515. Find Largest Element in Each Row
 * You need to find the largest element in each row of a Binary Tree.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findValueMostElement = function(root) {
    var find = function(node, result, level) {
        result[level] = (result[level] < node.val)? node.val : result[level];
        
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var tree1 = new TreeNode(1);
tree1.left = 2;
tree1.left.left = 5;
tree1.left.right = 3;
tree1.right = 3;
tree1.right.left = 9;

console.log(findValueMostElement(tree1)); //[1,3,9]