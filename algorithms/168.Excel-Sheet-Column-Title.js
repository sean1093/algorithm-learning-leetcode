/**
 * 168. Excel Sheet Column Title
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * @param {number} n
 * @return {string}
 */
 // Base 26 and use UTF-8 C0 Controls and Basic Latin
 //https://www.w3schools.com/charsets/ref_utf_basic_latin.asp
var convertToTitle = function(n) {
    var res = "";
    while(n > 0) {
        base = Math.floor((n-1) % 26);
        n = Math.floor((n-1) / 26); 
        res = String.fromCharCode(base+65) + res;    
    }
    return res;
};


console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(100)); // CV
console.log(convertToTitle(702)); // ZZ
console.log(convertToTitle(703)); // AAA
console.log(convertToTitle(100998)); // ESJN
