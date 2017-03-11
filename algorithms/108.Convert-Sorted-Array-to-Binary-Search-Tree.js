/**
 * 108. Convert Sorted Array to Binary Search Tree
 * @param {number[]} nums
 * @return {TreeNode}
 */
//Divide and Conquer 
var sortedArrayToBST = function(nums) {
    function setTree(array, start, end){
        if(start > end){
            return null;
        }
        var mid = start + parseInt((end - start)/2);
        var node = new TreeNode(array[mid]);
        node.left = setTree(array, start, mid-1);
        node.right = setTree(array, mid+1, end);        
        return node;
    }
    return setTree(nums, 0, nums.length-1);
};

// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
console.log(sortedArrayToBST([0,1,2,3,4,5,6,7,8,9,10])); //[5,2,8,0,3,6,9,null,1,null,4,null,7,null,10]
console.log(sortedArrayToBST([1,2,3])); //[2,1,3]
