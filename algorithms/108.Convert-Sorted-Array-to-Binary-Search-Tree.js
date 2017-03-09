/**
 * 108. Convert Sorted Array to Binary Search Tree
 * dev
 * @param {number[]} nums
 * @return {TreeNode}
 */
//Divide and Conquer 
var sortedArrayToBST = function(nums) {
    function setTree(array){
        var mid = Math.round((array.length-1)/2);
        // console.log("array[mid]:"+array[mid]);
        var node = new TreeNode(array[mid]);
        var left = array.slice(0, mid);
        var right = array.slice(mid+1, array.length);
        // console.log("left:"+left);
        // console.log("right:"+right);
        node.left = left.length !== 0? setTree(left): null;
        node.right = right.length !== 0? setTree(right): null;
        return node;
    }
    return setTree(nums);
};

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// console.log(sortedArrayToBST([0,1,2,3,4,5,6,7,8,9,10])); //[2,1,3]

console.log(sortedArrayToBST([1,2,3])); //[2,1,3]
