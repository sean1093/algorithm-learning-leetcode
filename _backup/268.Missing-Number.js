/**
 * 268. Missing Number
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    function sortNumber(a,b) {
        return a - b;
    }
    nums.sort(sortNumber);
    for(var i = 0; i<nums.length; i++){
        if(i != nums[i]){
            return i;
        }
    }
    return nums[nums.length-1] +1;
};

console.log(missingNumber([0,1,3])); //2


