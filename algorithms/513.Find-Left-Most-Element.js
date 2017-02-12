/**
 * 513. Find Left Most Element
 * Given a binary tree, find the left most element in the last row of the tree. 
 * @param {TreeNode} root
 * @return {number}
 */
var findLeftMostNode = function(root) {
    var level = 0;
    var left = 0;
    var countLeft = function(node, level){
    	if(node.left !== null){
    		level++;
    		countLeft(node.left, level);
    	}
    	else{
    		left = node.val;
    	}
    }
    countLeft(root, level);
    	return level;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var tree1 = new TreeNode(1);
tree1.left = 2;
tree1.left.left = 4;
tree1.right = 3;
tree1.right.left =5;
tree1.right.right = 6;
tree1.right.left.left = 7;

console.log(findLeftMostNode(tree1)); //7