/**
 * 53. Maximum Subarray
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var subSum = 0;
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
