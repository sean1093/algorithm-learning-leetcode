/**
 * 169. Majority Element
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * @param {number[]} nums
 * @return {number}
 */
// sort -> the center element must be Majority Element
var majorityElement = function(nums) {
    function sortNumber(a,b){
        return a - b;
    }
    nums.sort(sortNumber);
    return nums[Math.floor(nums.length/2)];
};

console.log(majorityElement([1])); //1
console.log(majorityElement([1,2,5,1,9,25,1,1,1])); //1