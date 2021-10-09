# Sequential Search

Sequential Search 又稱為 Linear Search (線性搜尋)，把整個數列從第一個開始一個一個循序的找到最後一個，直到找到目標元素為止

```js
function sequentialSearch(list, target) {
    for (let i = 0; i < list.length; i++) {
        if (target === list[i]) {
            return i;
        }
    }
    return -1;
}
```
