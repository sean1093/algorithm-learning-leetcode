# 581. Shortest Unsorted Continuous Subarray

Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

Example 1:
```
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```
Example 2:
```
Input: nums = [1,2,3,4]
Output: 0
```
Example 3:
```
Input: nums = [1]
Output: 0
```

## Solution

### solution: Better BF
- 找兩端 r, l
- 透過雙層迴圈 i start 0, j start i+1
    - 每次發現下一個值小於前一個
    - update r, l


### solution: sort
[2,6,4,8,10,9,15]
[2,4,6,8,9,10,15]
   i
            j
- algo
    - copy a new array and sort it
    - find diff index from first and end
    - the range is the answer
- time: O(nlogn)
- space: O(n)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const sorted = [...nums].sort((a,b) => a-b);
    const len = nums.length;
    if(len === 1) return 0;

    let start = len - 1
    let end = 0;
    for (let i=0; i<len; i++) {
        if(nums[i] !== sorted[i]) {
            start = i;
            break;
        }
    }
    
    for (let j=len-1; j>=0; j--) {
        if(nums[j] !== sorted[j]) {
            end = j;
            break;
        }
    }
    
    return (end - start >= 0 ? end - start + 1 : 0);
};
```

### solution: use stack
- 從兩邊各找一次，找到後把結果放入 stack

https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solution/
