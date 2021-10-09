/**
 * 628. Maximum Product of Three Numbers
 * Given an integer array, find three numbers whose product is maximum and output the maximum product.
 * @param {number[]} nums
 * @return {number}
 */

// Q:找出陣列中三數相乘的最大值(會有負數)
// A:先排序，最大值就會是後三位相乘(三正或三負)，或是最小兩位負數相乘再乘上最大的正數
// 因此只要比較這兩個值哪個大就可以了

var maximumProduct = function(nums) {
    if(nums.length < 3) return 0;
    else if(nums.length == 3) return nums[0] * nums[1] * nums[2];
    nums.sort(function(a,b){return a-b;});
    var hasNagtive = nums[0] * nums[1] * nums[nums.length - 1];
    var nonNagtive = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    return hasNagtive > nonNagtive ? hasNagtive : nonNagtive;   
};


console.log(maximumProduct([1,2,3])); //6
console.log(maximumProduct([1,2,3,4])); //24