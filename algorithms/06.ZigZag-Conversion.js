/**
 * 06. ZigZag Conversion
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    var locate = [];
    for(var idx = 0; idx < numRows; idx++) {
        locate[idx] = [];
    }

    var str = s.split("");
    var r = 0;
    var c = 0;
    var flag = 0;
    for(var i = 0; i < str.length; i++) {
        locate[r][c] = str[i]; 
    }
    
};


console.log("PAYPALISHIRING");
console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR"