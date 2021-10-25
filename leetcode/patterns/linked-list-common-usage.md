# Linked-list Common Usage

Linked-list 相關的基本操作

## 操作技巧 

### Dummy node

使用 dummy node 技巧來操作 Linked-list，避免動到本來的 Linked-list。

ex: 計算 list 長度

```js
// given list head
// 使用一個 dummy node 指向 head
let dummy = head;
let len = 0;
while (dummy) {
    // dummy node 會不斷變成下一個點，不會讓本來 head 鏈結斷掉
    dummy = dummy.next;
    len ++;
}
```

舉例來說有一個 list: `a -> b -> c -> d -> e`，這時候用一個 `dummy = head` 此時就會有: `dummy = a -> b -> c -> d -> e`

當我們在移動 `dummy` 的時候，實際上 `dummy` 會不斷變成 `b`, `c`,...，但本來的 `a -> b -> c -> d -> e` 並不會改變

## 基本操作問題

### Merge Two Sorted Lists

- 題目：[21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- 目標：合併兩個 sorted Linked-list，合併過後的新 list 也必須要排序過
- 範例：

```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

#### 思考

- 建立一個 newList 且使用  dummy node  技巧
- while 走完兩個 list ，同時加入新的 newList 

### Sort List

- 題目：[148. Sort List](https://leetcode.com/problems/sort-list/)
- 題目：[147. Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)
- 目標：將 list 排序
- 範例：

```
Input: head = [4,2,1,3]
Output: [1,2,3,4]
```

#### 思考
- 取長度，使用  dummy node  技巧避免動到本來的 list
- 對 list 做 sort，ex: bubble sort or Insertion or 其他方式都可以

### Reverse Linked List

- 題目：[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- 目標：反轉一個 Linked List
- 範例：

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

#### 思考

- 用一個新的 list，每次都把本來 list 的第一個 node 接過來當第一個 node

Dry run
```
list: [1,2,3,4,5]
new: null

--start--
list: [2,3,4,5]
new: [1]

list: [3,4,5]
new: [2,1]

list: [4,5]
new: [3,2,1]

list: [5]
new: [4,3,2,1]

list: null
new: [5,4,3,2,1]
```

### Remove Duplicates from Sorted List

- 題目：[83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
- 題目：[82. Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
- 目標：刪除 Linked List 中重複的點
- 範例：

```
# 83
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

# 82
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
```

#### 思考
- Loop 來檢查下一個點如果與當前點一樣，那就刪除下一個點
- 第二題多了發現有重複點，要把自己也刪除
    - 實際上邏輯差不多，需要多一個 pre 來紀錄上一個點是什麼

