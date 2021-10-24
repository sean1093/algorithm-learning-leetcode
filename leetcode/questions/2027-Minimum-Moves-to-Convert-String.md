# 2027. Minimum Moves to Convert String

https://leetcode.com/problems/minimum-moves-to-convert-string/

You are given a string s consisting of n characters which are either 'X' or 'O'.

A move is defined as selecting three consecutive characters of s and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

Return the minimum number of moves required so that all the characters of s are converted to 'O'.

Example 1:
```
Input: s = "XXX"
Output: 1
Explanation: XXX -> OOO
We select all the 3 characters and convert them in one move.
```
Example 2:
```
Input: s = "XXOX"
Output: 2
Explanation: XXOX -> OOOX -> OOOO
We select the first 3 characters in the first move, and convert them to 'O'.
Then we select the last 3 characters and convert them so that the final string contains all 'O's.
```
Example 3:
```
Input: s = "OOOO"
Output: 0
Explanation: There are no 'X's in s to convert.
``` 

Constraints:
```
3 <= s.length <= 1000
s[i] is either 'X' or 'O'.
```

## Solution

note
- find min move to all 'O'
- one move change 3 char tp 'O'

test
- XXOX
    - OOOX
    - OOOO
- XXOOXOX -> 2
    - OOOOXOX
    - OOOOOOO
    - len=7, X=4
- XXOOXOXX -> 3
    - len=8, X=5
- XXXXXOOO -> 2
    - len=8, X=5

algo
- for loop to get windows(3)
    - if start is O => put back one step
    - once 3 char existed 'X'
    - count++
  
time: O(n)
space: O(1)

```js
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    const len = s.length;
    if(len === 3) return s.indexOf('X') > -1 ? 1 : 0;

    let count = 0;
    let start = 0;
    let end = start+2;

    while(start < len) {
        if(s[start] === 'O') {
            start++;
        } else {
            count++;
            start+=3
        }
        end=start+2;
    }  
    return count;
};
```
