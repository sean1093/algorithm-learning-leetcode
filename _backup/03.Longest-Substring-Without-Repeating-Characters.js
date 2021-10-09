/**
 * 03. Longest Substring Without Repeating Characters
 * Given a string, find the length of the longest substring without repeating characters.
 * ex: 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * @param {string} s
 * @return {number}
 */
 /*
透過移動 start & end 來記錄每次的不重複 substring，當出現重複元素就加到 hashMap 或是更新 map 已經有的值
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    var str = s.split("");
    var hashMap = {};
    var subStr = "";
    var maxStr = "";
    var start = 0;
    var end = 0;
    var flag = true;
    for( var i = 0; i < str.length; i++ ) {
        if(!(str[i] in hashMap)) {
            hashMap[str[i]] = i;
        }
        else {
            flag = false;                       
            start = (hashMap[str[i]] +1) > start ? (hashMap[str[i]] +1) : start; // reset start
            hashMap[str[i]] = i;// update hash map         
        }
        end = i;
        subStr = "";
        for(var j = start; j<=end; j++) {
            subStr+= str[j];
        }
        if(subStr.length > maxStr.length ) {
            maxStr = subStr; 
        }
    }
    return flag ? s.length : maxStr.length;
};

console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("abcabdsdddcbb")); // 5
console.log(lengthOfLongestSubstring("a")); // 1
console.log(lengthOfLongestSubstring("abbcdb")); // 3
console.log(lengthOfLongestSubstring("ab")); // 2
console.log(lengthOfLongestSubstring("")); // 0