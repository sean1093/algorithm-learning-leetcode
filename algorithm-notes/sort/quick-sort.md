# Quick Sort 

Quick sort 又稱分割區交換排序

- 找出一個 pivot
- 把比 pivot 小的值放 pivot 左邊
- 把比 pivot 大的值放 pivot 右邊
- 數列根據 pivot 切分為兩個數列，兩個數列繼續往下一樣的動作
- 直到其中一邊的數列沒有值或是只剩下一個值

```js
function quickSort(originalList) {
    const list = [...originalList];
    if (list.length < 2) {
        return list;
    }

    const pivot = list[Math.floor(list.length / 2)];

    const left = list.filter((item) => item < pivot);
    const right = list.filter((item) => item > pivot);

    return [
      ...quickSort(left),
      pivot,
      ...quickSort(right)
    ];
}
```