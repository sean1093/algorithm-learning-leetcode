# 496. Next Greater Element I

https://leetcode.com/problems/next-greater-element-i/

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:
```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
```
Example 2:
```
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
```

Constraints:
```
1 <= nums1.length <= nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 104
All integers in nums1 and nums2 are unique.
All the integers of nums1 also appear in nums2.
```

## Solution

### Simple way

`runtime: 101 ms`

#### Think
- 用nums1找nums2當中下一個>的數字
- all nums are +
- nums1, nums2 最小長度為 1
- 找不到回傳 -1
    
#### Test
nums1 = [4,1,2], nums2 = [1,3,4,2]
- 4 -> find [1,3,"4",2] -> -1
- 1 -> find ["1",3,4,2] -> 3
- 2 -> find [1,3,4,"2"] -> -1
    - if find last => -1

nums1 = [0,3], nums2 = [1,3,0,2]
- 0 -> find [1,3,"0",2] -> 2
- 3 -> find [1,"3",0,2] -> -1
    - if num largest => -1
    
#### Algo
- for loop nums1
- find in num2
- go to the last to find >
- time O(nm)
- space O(n)

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    const res = [];
    
    for(let i=0; i<len1; i++) {
        let curr = nums1[i];
        let find = false;
        for(let j=0; j<len2; j++) {
            if(nums1[i] === nums2[j]) find = true;
            if(find && curr < nums2[j]) {
                curr = nums2[j];
                find = false;
                break;
            }
        }
        res.push(curr === nums1[i] ? -1 : curr);
    }
    return res;
};
```

enhance: O(nums1.length + nums2.length)?

### Monotonic stack

利用 monotonic stack 找出 num2 每一個值的 first greater element

`runtime: 96 ms`

#### Step:
- for loop num2 start from the back
- 如果 monotonicStack 有東西，檢查是否是單調遞減 e[i] > e[i+1]
    - 將 monotonicStack 處理成符合條件
    - 所有元素都不能小於當前 nums2[i]
    - 此時的 element 第一個大於的數字會是 monotonicStack.top()
- 把現在的值丟進 monotonicStack 準備下一回合

#### Dry run:
nums1 = [4,1,2], nums2 = [1,3,4,2]
- i=3 value=2 [x,x,-1,x,x] mono=[2]
- i=2 value=4 [x,x,-1,x,-1] mono=[4]
- i=1 value=3 [x,x,-1,4,-1] mono=[4,3]
- i=0 value=1 [x,3,-1,4,-1] mono=[4,3,1]

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const monoStack = [];
    const greaterArray = []; 
    for (let i= nums2.length-1; i>=0; i--) {

        while (monoStack.length > 0 && nums2[i] > monoStack[monoStack.length-1]) {
            monoStack.pop();
        }

        greaterArray[nums2[i]] = monoStack.length === 0 ?
            -1 : monoStack[monoStack.length-1];
        monoStack.push(nums2[i]);
    }

    const res = []
    for (let i = 0; i<nums1.length; i++){
        res.push(greaterArray[nums1[i]]);
    }

    return res;
}
```