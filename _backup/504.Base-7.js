/**
 * 504. Base 7 
 * Given an integer, return a base 7 representation of it as a String.
 * @param {number} num
 * @return {string}
 */
var convertTo7 = function(num) {
    var str = "";    
    var left = 0;
    var flag = false;
    if(num===0) {
        return 0;
    }
    else if(num < 0) {
        flag = true;
        num = Math.abs(num);
    }
    var base = num;
    while(base>7) {
        base = Math.floor(num / 7);      
        str += Math.floor(num % 7);
        num = base;
    }
    str += base;
    if(flag) {
        str = "-" + str;
    }
    return str;
};

console.log(convertTo7(100)); // "202"
console.log(convertTo7(-100)); // "-202"
console.log(convertTo7(-7)); // "-10"
