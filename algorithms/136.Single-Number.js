/**
 * 136. Single Number
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */

// Q: 一個陣列中，所有數字都會出現兩次，只有一個只出現一次，找出這一個
// A: concept: Bitwise Operators XOR -> a ^ b (XOR): 其中一個是1才會回傳1，兩個都是1的話會回傳0
// 利用XOR，因為自己跟自己XOR會是0，任何數跟0做XOR或是自己
// ex: [1,1,2]
// 1 ^ 1 = 0 (1 ^ 1 = 0)
// 0 ^ 2 = 2 (00 ^ 11 = 11)

var singleNumber = function(nums) {
    var r = 0;
    for (var key in nums) {
        r = r ^ nums[key];
    }
    return r;
};
console.log(singleNumber([1])); //1
console.log(singleNumber([1,2,1,4,7,2,7])); //4
