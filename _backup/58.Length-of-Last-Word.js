/**
 * 58. Length of Last Word
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str = s.split("");
    var count = 0;
    for(var i = s.length-1; i >= 0 ; i--) {       
        if(s[i] == " ") {
            if(count !== 0) {
                break;
            }
            else {
                continue;
            }
        }
        count++;
    }
    return count;
};

console.log(lengthOfLastWord("Hello World")); //5
console.log(lengthOfLastWord("")); //0
console.log(lengthOfLastWord("aaa ")); //3
console.log(lengthOfLastWord("aaa    ")); //3
