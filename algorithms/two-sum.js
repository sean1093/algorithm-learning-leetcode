/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){  	
        for(var j = i+1; j < nums.length; j++){
            var sum = nums[i] + nums[j];
            if(sum == target){
                var ansArray = [];
                ansArray.push(i);
                ansArray.push(j);
                return ansArray;
            }  			
        }
    }
};

var ans = twoSum([2, 7, 11, 15], 9); // return [0, 1]
console.log("Ans: "+ans);

var ans2 = twoSum([-1,-2,-3,-4,-5], -8); // return [2,4]
console.log("Ans: "+ans2);
