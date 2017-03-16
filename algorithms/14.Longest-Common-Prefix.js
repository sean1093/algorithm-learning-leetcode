/**
 * 14. Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * @param {string[]} strs
 * @return {string}
 */
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
