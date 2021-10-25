# Maximum Value of Subarray

找陣列中子陣列的最大總和、乘積，等等相關題型

## 總和問題
### Maximum Subarray

- 題目：[53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- 目標：找陣列中子陣列最大總和
- 範例：

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

#### 思考

拆解成子問題：從頭到每一個 i 當下的最大值怎麼找？
- 當前值 = max(累積值+新的值, 新的值)
- 最大值 = max(目前最大, 當前值)

### Maximum Absolute Sum of Any Subarray

- 題目：[1749. Maximum Absolute Sum of Any Subarray](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/)
- 目標：找陣列中子陣列最大加總絕對值
- 範例：

```
Input: nums = [1,-3,2,3,-4]
Output: 5
Explanation: The subarray [2,3] has absolute sum = abs(2+3) = abs(5) = 5.
```

#### 思考

- 找 sum of abs 最大意思其實就是找正數加總與負數加總的最大值
    - 公式可以寫為：`Max(正數加總, 負數加總)`
- 使用上題的 `maxSubArray` 去做正數與負數的加總
- 如何做負數加總？
    1. 改變本來邏輯
    2. 直接把 nums 內容正負數顛倒


## 乘積問題

### Maximum Product Subarray

- 題目：[152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
- 目標：找陣列中子陣列最大乘積
- 範例：

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```

#### 思考

- 最大乘積要考慮正數與負數，因為相乘負數之後最大最小值會翻轉
- 和 `maxSubArray` 一樣概念，每回合去記錄當下的最大值與當前值，但要多紀錄最小值
- 拆解成子問題找到公式
    - 每回合 max 是 max (目前值、上一回合 max * 目前值、上一回合 min * 目前值)
    - 每回合 min 是 min (目前值、上一回合 max * 目前值、上一回合 min * 目前值)

    