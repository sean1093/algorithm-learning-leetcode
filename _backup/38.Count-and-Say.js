/**
 * 38. Count and Say
 * The count-and-say sequence is the sequence of integers beginning as follows:
 * 1, 11, 21, 1211, 111221, ...
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * @param {number} n
 * @return {string}
 */

// 這題題目有問題，題意與test case 不同
// issue: https://discuss.leetcode.com/topic/1296/please-change-the-misleading-description/12


var countAndSay = function(n) {
    if(n <= 1) return "1";
    n = n.toString();
    var count = 1;
    var last = n[0];
    var result = "";

    for(var i = 1; i < n.length; i++) {
        if(last == n[i]) {
            count ++;
        }
        else {

            result += (count + "" + last);
            count = 1;
        }
        last = n[i];

        if(i == n.length-1) { //last one
            result += (count + "" + last);
        }
    }
    return result;

};

console.log(countAndSay(112)); // 2112
console.log(countAndSay(1)); // 11
console.log(countAndSay(11)); // 21
console.log(countAndSay(21)); // 1211
