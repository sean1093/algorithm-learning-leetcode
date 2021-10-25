# Selection Sort

每次從第 i 到 n 筆中挑出最小值，和前面第 i 筆交換。

nums = `[2, 5, 1, 7]`
- round1: get 1 in `[2, 5, 1, 7]` and update nums to `[1, 5, 2, 7]`
- round2: get 2 in `[5, 2, 7]` and update nums to `[1, 2, 5, 7]`
- round3: get 5 in `[5, 7]` and update nums to `[1, 2, 5, 7]`

```js
function selectionSort(array) {
    let min = 0;
    let idx = 0;
    for (let i = 0; i < array.length; i++) {
        idx = i;
        min = array[i];
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < min ) {
                min = array[j];
                idx = j;
            }
        }
        const temp = array[i];
        array[i] = array[idx];
        array[idx] = temp;
    }
    return array;
}
```