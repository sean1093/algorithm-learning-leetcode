/**
 * 409. Longest Palindrome
 * @param {string} s
 * @return {number}
 */
// 先排序，然後檢查出現兩次一樣的字母將最大偶數加入結果，若是奇數紀錄odd+1
// 還要檢查有沒有只出現一次的數字，一樣會紀錄odd+1，但是與前面的擇一
// Runtime: 115 ms
var longestPalindrome = function(s) {
    if(s.length === 0) return 0;
    else if(s.length == 1) return 1;   
    var str = s.split("");
    str.sort();
    var multi = 0;
    var odd = 0;
    var base = 0;
    var count = 1;
    var flag = false;
    var flag2 = false;
    var first = str[0];
    //check 
    for(var k = 0; k<str.length; k++) {
        if(base == str[k]) {
            count++;
        }
        else{
            if(count % 2 == 1) {
                odd = 1;
                multi += (count -1);
            }
            else {
                multi += count;
            }
            count = 1;
        }
        flag = (str[k] == first && k>0 && false === false) ? true : false;
        if(flag === true && flag2 === false) {
            odd--;
            flag2 = true;
        }
        base = str[k];
    }
    if(count % 2 == 1) {
        odd = 1;
        multi += (count -1);
    }
    else {
        multi += count;
    }      

    return multi + odd;
};
console.log(longestPalindrome("aaaa")); //4
console.log(longestPalindrome("abc")); //1
console.log(longestPalindrome("AAaa")); //4
console.log(longestPalindrome("aabbc")); //5
console.log(longestPalindrome("abccccdd")); //7
console.log(longestPalindrome("aAa")); //3
