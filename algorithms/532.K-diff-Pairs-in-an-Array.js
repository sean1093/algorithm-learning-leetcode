
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var count = 0;
    function sortNumber(a,b) {
        return a - b;
    }
    nums.sort(sortNumber);
    for (var i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }
        for(var j = i+1; j < nums.length;j++){
            if(nums[j] - nums[i] == k){
                count ++;
                break;
            }
            else if(nums[j] - nums[i] > k){
                break;
            }
        }
    }
    return count;
};

console.log(findPairs([3, 1, 4, 1, 5],2)); //2
console.log(findPairs([1, 2, 3, 4, 5],1)); //4
console.log(findPairs([1, 3, 1, 5, 4],0)); //1
console.log(findPairs([],0)); //0



