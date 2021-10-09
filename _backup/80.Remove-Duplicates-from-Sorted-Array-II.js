/**
 * 80. Remove Duplicates from Sorted Array II
 * 
 * Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?
 * For example, Given sorted array nums = [1,1,1,2,2,3], 
 * Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. 
 * It doesn't matter what you leave beyond the new length.
 * 
 * @param {number[]} nums
 * @return {number}
 */


// Q: 刪除排序好陣列中重複的元素(只留下兩個)
// A: 和26題一樣因為是排序好的陣列，所以相同的元素一定會排在一起
// 1.只要發現第i個與i+1不相等的時候就把count++，並且讓下一個值放到第count個
// 2.但是要多加一個num計數器來看是不是超過兩個，在兩個以下的話還是做跟第一點一樣的事情


var removeDuplicates = function(nums) {
    if(nums === null || nums.length === 0) return 0;
    if(nums.length == 1) return 1;
    var count = 0;
    var num = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i+1]){
            count ++;  
            if(i == nums.length -1) {
                break;
            }                                
            nums[count] = nums[i+1];
            num = 0;
        }
        else{
            num++;
            if(num < 2) {
                count++;
            }
            nums[count] = nums[i+1];
        }
    }
    return count;   
};
console.log(removeDuplicates([1,2,3,4,5]));//[1,2,3,4,5], 5
console.log(removeDuplicates([1,1,1,1,2,2]));//[1,1,2,2], 4
console.log(removeDuplicates([1,1,1,2,2,3]));//[1,1,2,2,3], 5
console.log(removeDuplicates([1,1,1,2,2,2,3,3]));//[1,1,2,2,3,3], 6
