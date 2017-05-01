/**
 * 345. Reverse Vowels of a String
 * Write a function that takes a string as input and reverse only the vowels of a string
 * @param {string} s
 * @return {string}
 */
// 反轉字串的母音字母，先找出母音放到陣列裡面，再找一次從後面開始重放
var reverseVowels = function(s) {
    var str = s.split("");
    var vowels = [];
    // get vowels 
    for(var k in str) {
        if(str[k] == "a" || str[k] == "e" || str[k] == "i" || str[k] == "o" || str[k] == "u" || 
            str[k] == "A" || str[k] == "E" || str[k] == "I" || str[k] == "O" || str[k] == "U") {
            vowels.push(str[k]);
        } 
    }
    // reverse vowels 
    var idx = vowels.length-1;
    for(var i = 0; i<str.length; i++) {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || 
            str[i] == "A" || str[i] == "E" || str[i] == "I" || str[i] == "O" || str[i] == "U") {
            str[i] = vowels[idx];
            idx--;
        } 
    }
    return str.join("");
};