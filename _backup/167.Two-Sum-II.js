/**
 * 167. Two Sum II - Input array is sorted
 * 
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
 * output not zero-based and index1 must be less than index2
 * Please note that your returned answers (both index1 and index2) are not zero-based.
 * You may assume that each input would have exactly one solution and you may not use the same element twice.
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Q: 給予一個排序好的陣列和一個值，找出陣列中相加是這個值的兩數座標
// 條件: 第一個數要小於第二個，必定會有唯一解
// A: num1從頭開始找，因為是排序好的陣列，所以num2用 binary search 來找
// 找到就return，找不到的話就往下再找第二個num1

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




