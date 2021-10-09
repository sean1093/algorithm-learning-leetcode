# Exponential Search

* Exponential Search 可以算是一種變形的 Binary Search，一樣只能搜尋已排序的數列
* 由於 Binary Search 必須從中間點開始切分，因此只能找已知長度的數列，而 Exponential Search 增強了這部分的功能。
* 他可以用於在為之長度的數列，先將範圍框住在一個固定長度的數列，再使用 Binary Search 接著來搜尋

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

function exponentialSearch(list, target){
    if (list[0] == target){
        return 0;
    }
 
    let index = 1;
    const length = list.length;
    while (index < length && list[index] <= target){
        index = index*2;
    }
    
    const targetList = list.filter((e, idx) => idx > (index/2) && idx < index);
    const targetIndex = binarySearch(targetList, target);
 
    return targetIndex === -1 ? targetIndex : targetIndex + (index/2 + 1);
}
```
