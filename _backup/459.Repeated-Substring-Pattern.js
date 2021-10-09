/**
 * 459. Repeated Substring Pattern
 * 
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * 
 * @param {string} s
 * @return {boolean}
 */

// Q: 找出這個字串是不是由重複的子字串pattern組成
// A: 找所有字串長度的因數，用這個因數來切子字串，檢查這些子字串有沒有一樣
// ex: abcabcabc，先找1來切成a,b,c...一有不一樣就換下一個因數，3來切成abc,abc,abc發現都一模一樣，就可以直接return true了

var repeatedSubstringPattern = function(s) {
    if(s.length < 2) return false;

    // 找因數，只要找到s長度一半即可，因為最長的substring就是一半
    for(var i = 1; i <= (s.length /2); i++) {
        if((s.length)%i === 0) {
            // 檢查substring，檢查到字串長度-因數就可以
            var pattern = s.slice(0,i);
            var flag = true;
            for(var j = i; j < (s.length-i+1); j+=i) {
                if(pattern != s.slice(j,j+i)) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                return true;
            }           
        }
    }
    return false;
};

console.log(repeatedSubstringPattern("aaaaa")); //true
console.log(repeatedSubstringPattern("abc")); //false
console.log(repeatedSubstringPattern("abab")); //true
console.log(repeatedSubstringPattern("abcabcabcabcabc")); //true
console.log(repeatedSubstringPattern("abcaaaabcaaa")); //true
