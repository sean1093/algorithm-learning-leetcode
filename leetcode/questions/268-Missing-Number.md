# 268. Missing Number

https://leetcode.com/problems/missing-number/

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:
```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```
Example 2:
```
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
```
Example 3:
```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
```
Example 4:
```
Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
```

Constraints:
```
n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
```

## Solution

直接 sort，然後找 index != value 的時候就是缺少的數字
Time: O(nlogn)

Runtime: `156 ms`

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
        if(i !== nums[i]){
            return i;
        }
    }
    return nums[nums.length-1] +1;
};
```

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

把所有數字 0 ~ n 都一起做 XOR，相同的數字 XOR 會變成 0，所以最後剩下的就是缺少的數字

Runtime: `110 ms`


```js
var missingNumber = function(nums) {
    const n = nums.length;
    let ans = 0;
    for(let i=0; i<n; i++){
        ans ^= nums[i] ^ i+1 
    }
    return ans;
};
```
