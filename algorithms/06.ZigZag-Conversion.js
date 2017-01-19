/**
 * 06. ZigZag Conversion
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows <= 1 ) return s;

    var locate = [];
    for(var idx = 0; idx < numRows; idx++) {
        locate[idx] = [];
    }

    var str = s.split("");
    var r = 0;
    var c = 0;
    var flag = 0;
    for(var k = 0; k < str.length; k++) {
        locate[r][c] = str[k]; 
        if(r === 0) flag = true;
        if(r == (numRows-1)) flag = false;
        if(flag) r++;
        else {
            r--;
            c++;
        } 
    }
    var re = "";
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j <= c; j++) {
            if(locate[i][j] !== undefined)
                re += locate[i][j];
        }
    }

    return re;   
};

console.log("ABCDE");
console.log(convert("ABCDE", 3)); //"AEBDC"

console.log("PAYPALISHIRING");
console.log(convert("PAYPALISHIRING", 3)); //"PAHNAPLSIIGYIR"

