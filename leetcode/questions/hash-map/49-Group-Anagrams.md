# 49. Group Anagrams

https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```
Example 2:
```
Input: strs = [""]
Output: [[""]]
```
Example 3:
```
Input: strs = ["a"]
Output: [["a"]]
```

Constraints:

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

## Solution

note
- anagrams: 使用一樣字詞的單字 ex:abc acb cba...
- 有可能有空字串, strs 最小長度為 1

test
- res array
- currIdx = 0;
- hashMap(key, index)
    - key -> sorted word
    - index -> the array index in res
    - index = -1 -> not exist yet
- loop all strs
    - sort str
    - check hashMap
        - if key in map => append into res
        - if key not appear => put to hashMap and append into res by currIdx
            - currIdx++
                
["eat","tea","tan","ate","nat","bat"]  
res= [[eat, tea, ate][tan, nat][bat]]
currIdx = 1
hashMap[(aet, 0), (ant, 1), (abt,2)]
eat->aet
tea->aet
tan->ant
ate->aet
nat->ant
bat->abt

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const len = strs.length;
    if(len === 1) return [strs];
    
    const res = [];
    let currIdx = 0;
    const hashMap = new Map();
    
    for(let i=0; i<len; i++) {
        const str = strs[i].split('')
            .sort((a,b) => a.localeCompare(b))
            .join('');
        if(hashMap.get(str) !== undefined) {
            const arr = res[hashMap.get(str)];
            arr.push(strs[i]);
        } else {
            hashMap.set(str, currIdx);
            const arr = [strs[i]];
            res.push(arr);
            currIdx++
        }
    }
    return res;
};
```