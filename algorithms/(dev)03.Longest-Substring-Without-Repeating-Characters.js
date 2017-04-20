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
var lengthOfLongestSubstring = function(s) {
    var str = s.split("");
    var hashMap = {};
    var length = 0;
    var subStr = "";
    var maxStr = "";
    var start = 0;
    var end = 0;

    for( var i = 0; i < str.length; i++ ) {
        if(!(str[i] in hashMap)) {
            hashMap[str[i]] = i;
            end = i;
            subStr += str[i];
        }
        else {
            if((end - start) >= length ) {
                length = end - start;
                maxStr = subStr; 
            }
            subStr = str[i];
            start = hashMap[str[i]] +1; // reset start
            hashMap[str[i]] = i;// update hash map
            end = i;
        }
    }
    return maxStr;



    // var stringArray = s.split("");
    // var redundancy = {};
    // var maxStr = "";
    // var str = ""
    // for( var i = 0; i < stringArray.length; i++ ) {
    //     // console.log(stringArray[i]);
    //     if( stringArray[i] in redundancy) {
    //         if( maxStr.length < str.length) {
    //             maxStr = str;
    //         }
    //         // i = redundancy[stringArray[i]] + 1;
    //         // break;
    //         str = stringArray[i];
    //     }
    //     else {
    //         str += stringArray[i];
    //         //put into redundancy
    //         redundancy[stringArray[i]] = i; 
    //     }
    //     // console.log("----maxStr: "+maxStr);
    //     // console.log("str: "+str);
    //     // console.log(redundancy);
    // }
    // return maxStr;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //return abc
console.log(lengthOfLongestSubstring("bbbbb")); //return b
console.log(lengthOfLongestSubstring("pwwkew")); //return wke
console.log(lengthOfLongestSubstring("abcabdsdddcbb")); //return cabds