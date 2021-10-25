# Merge Sort

先分割再合併

- 從中間不斷分割數列直到只剩下個元素
- 開始以最小單位的兩個數列，兩兩排序

```js
function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());  
        } else {
            arr.push(right.shift()); 
        }
    }
    return [ ...arr, ...left, ...right ];
}

function mergeSort(list) {
    const half = list.length / 2;
    if(list.length < 2){
        return list; 
    }

    const left = list.splice(0, half);

    return merge(mergeSort(left),mergeSort(list));
}
```
