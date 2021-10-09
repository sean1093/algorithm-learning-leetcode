# Dynamic Programming

## 簡介

https://medium.com/p/de980ca4a2d3

## 使用時機
* 找最佳解
* 子問題之間有重疊

## 題型

### 找 Array 中連續 sub-array 的值

#### 最大加總
https://leetcode.com/problems/maximum-subarray/

##### 題目與限制
* 找 array 中，sub-array 最大的 sum
* 數字會出現負數

##### 解法
* 如果先前值加總起來是負數，那就捨棄之前的值，使用目前 i 的值重新開始
* 如果先前值加總起來是正數，就繼續加上目前的值
* 每次紀錄當下最大值

#### 最大乘積
https://leetcode.com/problems/maximum-product-subarray/

##### 題目與限制
* 找 array 中，sub-array 最大的乘積
* 數字會出現負數

##### 解法
* 用 dpMax & dpMin 記錄每回合相乘之後最大最小值
* 每回合 max 是 max (目前值、上一回合 max * 目前值、上一回合 min * 目前值)
* 每回合 min 是 min (目前值、上一回合 max * 目前值、上一回合 min * 目前值)

---

### 給予條件，找 N 有幾種符合條件的做法

#### 爬樓梯問題
https://leetcode.com/problems/climbing-stairs/

##### 題目與限制
* 一次只能走 1 or 2 步
* 找到達 n 階有幾種爬法

##### 解法
* 找規律，大問題是前面的小問題組成
* 當 i 的時候，當下的解答會是前面的組合，透過查表來取得解答

#### 費氏數列
https://leetcode.com/problems/fibonacci-number/

##### 題目與限制
* 經典費氏數列問題
* 求目標值

##### 解法
* Fn =  Fn-1 + Fn-2

#### 找可能路徑走法
https://leetcode.com/problems/unique-paths/

##### 題目與限制
* 一個二維的路徑，只能走 right & bottom
* 求從左上的起點，到右下的終點，總共可以有幾種走法

##### 解法
* 建立一個二維 DP table
* 先把 table 最上與最左這條，都先設為 1，因為都只能有一種走法
* 每回合都更新一次加上 top & left 可以抵達的步數
* 最後一個即為所有可能組合

#### 找可能路徑走法 II
https://leetcode.com/problems/unique-paths-ii/

##### 題目與限制
* 一個二維的路徑，只能走 right & bottom
* 求從左上的起點，到右下的終點，總共可以有幾種走法
* 中間可能會有障礙物，標示為 `1`

##### 解法
* 使用 Unique Paths 一樣做法，但把 obstacleGrid 拿來當作 dp table
* 遇到障礙，把值改為 `0` => 表示這個點是無法到達的
* 走的時候要判斷當下的點是不是為 `1`，當下是 `1` 表示有障礙物，接著同上把 obstacleGrid 這點改為 `0`

---

### 給予條件，找尋所有條件中最小或是最大值

#### 找最大獲利
https://leetcode.com/problems/house-robber/

##### 題目與限制
* 從節點中取值，但是不能取相鄰的點
* 求最大值

##### 解法
* 先觀察找出公式 dp[i] = max(dp[i-1], dp[i-2] + nums[i])
* 完成 dp table 即可

#### 找最大獲利 II
https://leetcode.com/problems/house-robber-ii/

##### 題目與限制
* 從節點中取值，但是不能取相鄰的點
* 加上了頭尾相鄰
* 求最大值

##### 解法
* 先觀察找出公式 dp[i] = max(dp[i-1], dp[i-2] + nums[i])
* 完成 dp table
* 拆成兩段分別找一次最大值，再取 max
* `max(find(0, n-1), find(1, n))`

#### 
##### 題目與限制
##### 解法