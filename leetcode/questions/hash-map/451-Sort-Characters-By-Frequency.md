# 451. Sort Characters By Frequency

https://leetcode.com/problems/sort-characters-by-frequency/

Given a string `s`, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 
Example 1:
```
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
```
Example 2:
```
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
```
Example 3:
```
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
```
 
Constraints:
```
1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
```

## Solution

note
- str sort by freq
- 大小寫視為不同

test
- tree -> eert/eetr
- aaa -> aaa
- abc -> abc/cba/bac/...

algo
- hash map: 紀錄文字出現頻率 (文字, 頻率)
- for loop str
    - 完成 hash map
    - sort hash map
    - loop hash map from 頻率大到小
        - 組成新的 str
- time: O(nmlogm)
- space: O(n)

enhance
- put hash map into priority queue => no need to sort the map


### Solution 1

Runtime: `160 ms`
Memory: `46.7 MB`

```js
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hash = new Map();

    for(let i=0; i<s.length; i++) {
        const target = hash.get(s[i]);
        if(!target) {
            hash.set(s[i], 1);
        } else {
            hash.set(s[i], target+1);
        } 
    }
    
    const mapAsc = new Map([...hash.entries()].sort((a, b) => b[1] - a[1]));
    let ans = '';
    mapAsc.forEach((value, key) => {
        let count = value;
        while(count > 0) {
            ans += key
            count--;
        }
    });

    return ans;
};
```

### Solution 2

enhance by using priority queue

Runtime: `134 ms`
Memory: `41.4 MB`

```js
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hash = new Map();

    for(let i=0; i<s.length; i++) {
        const target = hash.get(s[i]);
        if(!target) {
            hash.set(s[i], 1);
        } else {
            hash.set(s[i], target+1);
        } 
    }

    const priorityQueue = new MaxPriorityQueue();
    hash.forEach((value, key) => priorityQueue.enqueue(key, value));

    let ans = "";
    while(!priorityQueue.isEmpty()){
        let elem = priorityQueue.dequeue();
        ans += elem.element.repeat(elem.priority);
    }
    return ans;
};
 ```
 