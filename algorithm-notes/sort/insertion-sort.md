# Insertion Sort

把把第 i 筆資料插入前面 (i-1) 筆已經排序好的陣列中

```js
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if(array[j] < array[j-1]) {
                const temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    return array;
} 
```