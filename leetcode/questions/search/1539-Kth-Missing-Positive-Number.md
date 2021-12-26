# 1539. Kth Missing Positive Number

Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.


Example 1:
```
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
```
Example 2:
```
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
```

## Solution

### notes
- 目標：找第 k 個缺少的正整數
- 觀察：嚴格線性遞增

### algo

#### 線性搜尋

- 用一個 counter 紀錄有在 array 中出現的數字
- 每回合
    - counter ++
    - 如果當前數字沒有在 array 中，k--
- 直到 k 等於 0 拿出當下的 counter

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let counter = 1;
    while(k >= 0) {
        if (arr.indexOf(counter) === -1) {
            // not in array
            k--;
        }
        if (k === 0) {
            return counter;
        }
        counter++;
    }
    return counter;
};
```

* Time: O(n), runtime: 142 ms
* Space: O(1)

#### 二分法

- 先觀察規律：
    - k=5 => target=5+前面出現過的數字和=5+4=9
    - k=2 => 4+2
- 要找的數字會是安插的位置 + k 值
    - ex: [2,3,4,7,11], k=5
        - index -> 4
        - 4+5=9
- dry run
```
[2, 3, 4, 7, 11]
 s     m     e
arr[mid] < k + mid => 4 < 9 => true: start = mid + 1
         s/m  e
arr[mid] < k + mid => 7 < 8 => true: start = mid + 1
          m s/e
arr[mid] < k + mid => 11 < 9 => false: end = mid - 1
return s+k = 4+5=9
```


```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
     let start = 0;
     let end = arr.length - 1;
     while (start <= end) {
         let mid = start + Math.floor((end - start) / 2);
         if (arr[mid] <= k + mid) {
             start = mid + 1;
         } else {
             end = mid - 1;
         }
     }
     return start + k;
};

```

* Time: O(n), runtime: 76 ms
* Space: O(1)