/**
 * 387. First Unique Character in a String
 * Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 * @param {string} s
 * @return {number}
 */
// 先掃一次計入出現幾次，再掃一次看哪一個只出現1次的最先出現
var firstUniqChar = function(s) {
    if(s.length === 0) return -1;
    var str = s.split("");
    var hashMap = {};
    for(var k in str) {
        if(str[k] in hashMap) {
            hashMap[str[k]]++;
        }
        else {
            hashMap[str[k]] = 1;
        }
    }
    for(var i=0; i<str.length; i++) {
        if(hashMap[str[i]] == 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode")); //0
console.log(firstUniqChar("loveleetcode")); //2
console.log(firstUniqChar("aabbcc")); //-1
console.log(firstUniqChar("")); //-1
console.log(firstUniqChar("aaab")); //3