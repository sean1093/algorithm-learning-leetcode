# Binary Search

需要先將數列排序，接著每次由中間將數列切成兩邊，比對數列的中間值，如果小於再比前半段，大於再比後半段，直到找到或是數列清空為止

```js
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    return -1;
};
```