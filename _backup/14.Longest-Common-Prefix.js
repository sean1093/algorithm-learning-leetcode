/**
 * 14. Longest Common Prefix 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
// Q: 給一個 string[]，找出這些字串中共同最長的prefix
// A: 利用刪去法
// 1. 先把第一個字串當作 prefix 
// 2. 開始從第二個檢查，從第一個字母往後，發現有跟 prefix 不一樣的字的時候就 break 並且裁切 prefix 到不一樣之前

var longestCommonPrefix = function(strs) {
    var prefix = "";
    if(strs.length === 0 || strs === null) return prefix;
    prefix = strs[0];
    for(var i = 1; i<strs.length; i++) {
        var j = 0;
        for(; j<prefix.length; j++) {
            if(prefix[j] !== strs[i][j]) {               
                break;
            }
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix([])); //""
console.log(longestCommonPrefix(["aa", "a"])); //"a"
console.log(longestCommonPrefix(["abcrww","abces","abet"])); //ab
