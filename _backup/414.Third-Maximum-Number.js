/**
 * 414. Third Maximum Number
 * Given a non-empty array of integers, return the third maximum number in this array. 
 * If it does not exist, return the maximum number. 
 * The time complexity must be in O(n).
 * @param {number[]} nums
 * @return {number}
 */
// Q: 找出一個陣列中第三大的數字，如果沒有就回傳最大的
// A: 先排序，然後從最後利用一個flag開始找，flag從3開始減到0就回傳當下的數字，如果是重複的flag就不會減
// 當最後迴圈跑完之後，如果flag還大於0，代表沒有出現三個以上的數，這時候就回傳陣列最後的值

var thirdMax = function(nums) {    
    var res;
    var flag = 3;
    nums.sort(function(a,b){return a-b;});
    for(var i = nums.length-1; i>=0; i--) {
        if(res != nums[i]) {
            flag --;
        }
        res = nums[i];
        if(flag === 0) {
            return res;
        }        
    }    
    return flag > 0 ? nums[nums.length-1] : res;
};