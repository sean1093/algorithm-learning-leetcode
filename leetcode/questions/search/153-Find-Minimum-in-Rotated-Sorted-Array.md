# 153. Find Minimum in Rotated Sorted Array

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:
```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```
Example 2:
```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```
Example 3:
```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
``` 

Constraints:
```
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
```

## Solution

Runtime: `70 ms`

直接有條件的線性搜尋

- if nums[0] < nums[len-1] => not rotated or rotated = len
    - nums[0] is min
- 從尾端的開始找，找到數列變化為終點
    - nums[i] > nums[i-1] if not min = nums[i]

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const len = nums.length;
    if(nums[0] < nums[len-1] || len===1) return nums[0];
    
    for(let i=len-1; i>0; i--) {
        if(nums[i] < nums[i-1]) return nums[i];
    }
    return -1;
};
```

使用 Binary search 的方式
- 設定兩邊 left and right
- 每次看中間值有沒有大於 right => left = mid + 1

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    
    while(left<right) {
        let mid = left + Math.floor((right-left)/2);      
        if(nums[mid]>nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left];
};
```