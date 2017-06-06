/**
 * 202. Happy Number
 * 
 * A happy number is a number defined by the following process: 
 * Starting with any positive integer, replace the number by the sum of the squares of its digits, 
 * and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
 * Those numbers for which this process ends in 1 are happy numbers.
 *
 * Example: 19 is a happy number
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * @param {number} n
 * @return {boolean}
 */

// Q: 檢查是不是 happy number，如果出現無窮迴圈就不是
// A: 造字面意思去拆解計算，主要是要處理無窮迴圈，使用一個map去記錄出現過的 total ，他重複就代表會有無窮迴圈

var isHappy = function(n) {
    if(n < 1) return false;
    if(n ==1) return true;
    n = n.toString();
    var hash = {}; //check endless
    var i = 0;
    while(!hash[i] && n != 1) {
        var total = 0;
        for(var j = 0; j < n.length; j++) {
            total += n[j] * n[j];
        }

        if(total == 1) {
            return true;
        }
        else {
            n = total.toString();
        }
        if(hash[total]) {
            return false;
        }
        hash[total] = total;
    }   
};
console.log(isHappy(20));
console.log(isHappy(19));