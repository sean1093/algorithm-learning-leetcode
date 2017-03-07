/**
 * 136. Single Number
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
// concept: Bitwise Operators XOR
var singleNumber = function(nums) {
    var r = 0;
    for (var key in nums) {
        r = r ^ nums[key];
    }
    return r;
};
console.log(singleNumber([1])); //1
console.log(singleNumber([1,2,1,4,7,2,7])); //4
