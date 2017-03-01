/**
 * 167. Two Sum II - Input array is sorted
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * output not zero-based and index1 must be less than index2
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(var i = 0; i < numbers.length; i++) { 
        var left = i;
        var right = numbers.length - 1;
        var mid = 0;
        var index1 = numbers[i];
        while(left <= right){
            mid = Math.round((left + right) / 2);
            var index2 = numbers[mid];
            if((index1 + index2) > target) {
                right = mid - 1;
            }
            else if((index1 + index2) < target) {
                left = mid + 1;
            }
            else if((index1 + index2) === target) {
                return [i + 1, mid + 1];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSum([-5, -3, -2, 0, 7], 5)); //[3,5]




