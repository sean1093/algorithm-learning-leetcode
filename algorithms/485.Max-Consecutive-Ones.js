/**
 * 485. Max Consecutive Ones
 * Input: [1,1,0,1,1,1], Output: 3
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0, max = 0;
    for (var i in nums) {
        if(nums[i]==1){
            count++;
        }
        else{
            count = 0;
        }
        max = count > max? count : max;
    }
    return max;   
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([])); // 0