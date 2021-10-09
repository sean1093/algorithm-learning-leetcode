# Bubble Sort

像是氣泡一樣不斷往上升，一次比較兩個元素，如果他們的順序錯誤就把他們交換過來，每次會將最大值升到最頂端。

```js
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j< n-i-1; j++) {
            if (array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
```
