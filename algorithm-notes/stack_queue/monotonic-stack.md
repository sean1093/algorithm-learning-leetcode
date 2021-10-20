# Monotonic Stack

特性
- 每次增加新元素到 Monotonic Stack 時， Monotonic Stack 內的元素都必須要保持 Monotonic
- Monotonic：可以是單調遞增或是單調遞減

用途
- 利用 Monotonic Stack 內元素單純遞增或單純遞減，可以拿來找任一元素下一個大於或是小於的值

時間複雜度
- O(N)
## Next Greater Number

Question: 給予一個陣列 `[2,1,2,4,3]`，回傳每一個值第一個大於他的數值，沒有的話回傳 -1

Ans: `[2,1,2,4,3]` => `[4,2,4,-1,-1]`

### 暴力法
- 每個 i 走一遍陣列，每次找第一個大於他的值
- Time: O(n^2)

### 使用 Monotonic Stack
#### What we want to do
- 建立一個單調遞減的 monoStack，每次 push 新的值之前都要先整理 stack
- 每次的 monoStack top 就會是第一個比 num[i] 小的元素

#### Algo

```js
var nextGreaterElement = function(nums) {
    const monoStack = [];
    const greaterArray = []; 

    // 從底部開始反向塞入 stack
    for (let i= nums.length-1; i>=0; i--) { 
        // 檢查塞入的 element 有沒有 break monoStack 的單線程(遞增or遞減)
        while (monoStack.length > 0 && nums[i] >= monoStack[monoStack.length-1]) {
            // 如果有，把 stack 元素先做調整
            monoStack.pop();
        }
        // 調整完的 stack top 會是當前要塞入 element 向右第一個大於他的值，如果 monoStack 為空，表示沒有符合條件
        greaterArray[i] = monoStack.length === 0 ? -1 : monoStack[monoStack.length-1];
        // 最後塞入這個 element
        monoStack.push(nums[i]); 
    }

    return greaterArray;
}
```

#### Dry Run

num = [2,1,2,4,3]

| index | value | monoStack  | greaterArray |
|  ----  | ----  | ----  |----  |
| 4  | 3 | [3] | [x,x,x,x,-1] |
| 3  | 4 | [4] | [x,x,x,-1,-1] |
| 2  | 2 | [4,2] | [x,x,4,-1,-1] |
| 1  | 1 | [4,2,1] | [x,2,4,-1,-1] |
| 0  | 2 | [4,2] | [4,2,4,-1,-1]|

## Example

- [496. Next Greater Element I](../../leetcode/questions/496-Next-Greater-Element-I.md)