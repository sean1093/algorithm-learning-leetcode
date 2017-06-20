/**
 * 415. Add Strings
 * 
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 * 
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    num1 = num1.split("");
    num2 = num2.split("");
    var result = num1.length > num2.length ? num1 : num2; // find larget one
    var target = num1.length > num2.length ? num2 : num1;
    var next = 0;
    var i = 0;
    for(; i < result.length; i++) {
        var r = result[result.length-i-1] === undefined ? 0 : result[result.length-i-1]*1;
        var t = target[target.length-i-1] === undefined ? 0 : target[target.length-i-1]*1;
        var res = r + t + next;
        if(res > 9) {
            res -= 10;
            next = 1;
        }
        else{
            next = 0;
        }
        result[result.length-i-1] = res;
    }

    return next == 1 ? "1" + result.join("") : result.join("");  
};
console.log(addStrings("9", "9")); // "18"
console.log(addStrings("9", "99")); // "108"
console.log(addStrings("1", "300")); // "301"
console.log(addStrings("0", "0")); // "0"
console.log(addStrings("12", "19")); // "31"



