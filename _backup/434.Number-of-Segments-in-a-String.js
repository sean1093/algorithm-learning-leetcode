/**
 * 434. Number of Segments in a String
 * @param {string} s
 * @return {number}
 */

// Q: 找出區塊的字串數量
// A: 一個一個找，幫找到前一個是空白且下一個不是空白的時候count就+1(起始從1開始)，結果95ms
// 這個解反而比較慢 26 / 26 test cases passed. 105ms
// return (s.length === 0 ? 0 : s.replace(/\s{2,}/g," ").split(" ").length);
var countSegments = function(s) {
    if(s === null || s === undefined) return 0;
    s = s.trim();
    if(s.length === 0) return 0;
    var count = 1;
    var last = s[0];
    for(var i = 0; i < s.length; i++) {
        if(last == " " && s[i] !== " ") {
            count++;
        }
        last = s[i];
    }
    return count;
};



console.log(countSegments(" Hello, my name  is John")); //5
console.log(countSegments(" Hello ")); //1
console.log(countSegments("    ")); //0
