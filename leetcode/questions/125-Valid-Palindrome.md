# 125. Valid Palindrome

https://leetcode.com/problems/valid-palindrome/

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 
Example 1:

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

Example 2:

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

Constraints:

`1 <= s.length <= 2 * 10^5`
`s` consists only of printable ASCII characters.


## Solution

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const center = Math.round(str.length/2) - 1;
    const isEven = str.length % 2 === 0;
    
    let left = isEven ? center : center - 1;
    let right = center + 1;
    
    while (left >= 0) {
        if (str[left] !== str[right]) {
            return false;
        }      
        left--;
        right++;
    }
    return true;
};
```
