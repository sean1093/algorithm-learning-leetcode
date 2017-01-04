/**
 * 26. Remove Duplicates from Sorted Array
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if(nums === null || nums.length === 0) return 0;
	if(nums.length == 1) return 1;
	var count = 0;
    for(var i = 0; i< nums.length; i++) {
        if(nums[i] != nums[i+1]){
            count ++;
            nums[count] = nums[i+1];
        }
    }
    return count;
};
console.log(removeDuplicates([]));//[]
console.log(removeDuplicates([1]));//1
console.log(removeDuplicates([1,1,2]));//[1,2], 2
console.log(removeDuplicates([0,0,1,1,2]));//[0,1,2], 3
console.log(removeDuplicates([1,2,3,4,5,6,7,8]));//[1,2,3,4,5,6,7,8], 8
console.log(removeDuplicates([0,1,2,2,3,4,5,7,7,7,8,9,10,11]));//[0,1,2,3,4,5,7,8,9,10,11], 11