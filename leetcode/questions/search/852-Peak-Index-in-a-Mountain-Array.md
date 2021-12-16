# 852. Peak Index in a Mountain Array

Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].


Example 1:
```
Input: arr = [0,1,0]
Output: 1
```
Example 2:
```
Input: arr = [0,2,1,0]
Output: 1
```
Example 3:
```
Input: arr = [0,10,5,2]
Output: 1
```

## Solution

note
- 只有一個peak

algo
- 線性找 max
- binary search 找到 peak
    - left, right 兩邊限縮區域
    - if mid < mid+1 => 表示遞增（peak 的左邊）
        - left = mid+1
    - else => 右邊
        - right = mid
    - 最後 return

### Linear Scan

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let maxIdx = 0;
    let max = arr[maxIdx];
    
    for (let i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
            maxIdx = i;
        }
    }
    return maxIdx;
};
```

### Binary Search

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length-1;
    
    while (left < right) {
        const mid = Math.floor((right + left) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid] > arr[mid - 1]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return 0;
};
```

### Built-in function

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = arr => {
	return arr.indexOf(Math.max(...arr))
}
```
