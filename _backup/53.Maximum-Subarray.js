/**
 * 53. Maximum Subarray
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * @param {number[]} nums
 * @return {number}
 */
//直接相加找到最大值
var maxSubArray = function(nums) {
    if(nums.length == 1) return nums[0];
    var sum = -Infinity;
    var subSum = -Infinity;
    for(var i=0; i<nums.length; i++) {
        if (subSum < 0) {
            subSum = 0;
        }
        subSum += nums[i];
        if (subSum > sum) {
            sum = subSum;
        }
    }
    return sum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6
console.log(maxSubArray([-1])); //-1
