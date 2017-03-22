/**
 * 217. Contains Duplicate 
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
// sort -> if [i] = [i+1] false
var containsDuplicate = function(nums) {
    function sortNumber(a,b){
        return a - b;
    } 
    nums.sort(sortNumber);
    for(var i=0; i<nums.length-1; i++) {
        if(nums[i] == nums[i+1]) 
            return true;
    }
    return false;
};
console.log(containsDuplicate([])); //false
console.log(containsDuplicate([1])); //false
console.log(containsDuplicate([1,5,7,2,19,2,1])); //true
