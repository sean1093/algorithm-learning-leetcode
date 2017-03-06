/**
 * 283. Move Zeroes
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// concept of bubble sort
var moveZeroes = function(nums) {
    var _swap = function(x, y, array){
        var temp = array[y];
        array[y] = array[x];
        array[x] = temp;
    };
    for(var i = 0; i < nums.length-1; i++) {
        for(var j = 0; j < nums.length-i-1; j++) {
            if(nums[j] === 0) {
                _swap(j, j+1, nums);
            }
        }
    }
    console.log(nums);
};


console.log(moveZeroes([0, 1, 0, 3, 12])); //[1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 0, 3, 0])); //[3, 0, 0, 0, 0]
console.log(moveZeroes([3, 0])); //[3, 0]
console.log(moveZeroes([0, 0, 1])); //[1, 0, 0]