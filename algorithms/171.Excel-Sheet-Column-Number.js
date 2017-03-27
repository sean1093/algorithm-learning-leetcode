/**
 * 171. Excel Sheet Column Number
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 * @param {string} s
 * @return {number}
 */
// AB = (A)26^(1)*(code-64) + (B)26^(0)*(code-64)  = 26*1 + 1*2 = 28
var titleToNumber = function(s) {
    var str = s.split("");
    var result = 0;
    var base = 0;
    for(var i = str.length-1; i >= 0; i--) {
        result += (str[i].charCodeAt()-64)*Math.pow(26, base); 
        base++;     
    }
    return result;
};

console.log(titleToNumber("A")); //1
console.log(titleToNumber("C")); //3
console.log(titleToNumber("BB")); //54
console.log(titleToNumber("AA")); //27
console.log(titleToNumber("AAB")); //704
console.log(titleToNumber("ZAAB")); //457680