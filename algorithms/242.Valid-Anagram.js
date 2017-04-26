/**
 * 242. Valid Anagram
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 這題要找兩個字串組成字母有沒有一模一樣
// 首先先比較長度不一樣就return false，接著變成array排序完再組回去字串，假如兩個新字串一樣代表相等
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    var strS = s.split("").sort();
    var strT = t.split("").sort();
    return strS.join("") == strT.join("");
};


console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); // false

