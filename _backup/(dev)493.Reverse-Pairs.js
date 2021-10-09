/**
 * 493. Reverse Pairs
 * Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    if(nums == null || nums.length == 0) return 0;
    var count = 0;
    for(var i=0; i< nums.length; i++) { 

//TODO: sort left array and find
var temp = nums.slice(i);
var target = nums[i];
console.log("target: "+target);
        for(var j=i+1; j< temp.length; j++) {
            // console.log("nums[i]: "+nums[i]);
            // console.log("nums[j]: "+2*nums[j]);
            if(nums[i] > 2*nums[j]){
                count++;
                // console.log("ok");
            }
            // console.log("---");
        }
        // console.log("****************");
    }
    return count;
};

console.log(reversePairs([1,3,2,3,1])); // 2
console.log(reversePairs([2,4,3,5,1])); // 3
console.log(reversePairs([2,2,-2,-2,-2,2])); // 9
console.log(reversePairs([2147483647,2147483647,-2147483647,-2147483647,-2147483647,2147483647])); // 9
// 
