/**
 * 27. Remove Element
 * Given an array and a value, remove all instances of that value in place and return the new length.
 * Do not allocate extra space for another array, you must do this in place with constant memory.
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 * Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Q: 刪除陣列中給予的值，並且回傳長度
// A: 從頭掃到尾，當發現值不等於val時，就把count++，並且把這個值放到nums[count]裡面，這樣就可以刪掉等於的數值


var removeElement = function(nums, val) {
    if(nums.length < 1) return 0;
    var count = 0; 
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != val) {
            nums[count] = nums[i];
            count++;            
        }
    }
    return count;
};

console.log(removeElement([3,2,2,3], 3)); // [2, 2]
console.log(removeElement([1,1,1], 1)); // []
console.log(removeElement([], 2)); // []