/**
 * 557. Reverse Words in a String III
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * @param {string} s
 * @return {string}
 */
// 拆成小字串分別去做reverse(344)，最後再組回來
// Runtime: 128 ms
var reverseWords = function(s) {
    var str = s.split(" ");
    var reverseString = function(s) {
        var str = s.split("");
        var _swap = function(x, y, array) {
            var temp = array[y];
            array[y] = array[x];
            array[x] = temp;
        };
        var mid = Math.floor((str.length)/2);
        for(var i=0; i<mid; i++){
            _swap(i, str.length-1-i, str);
        }
        return str.join("");   
    };
    for(var k in str) {
        str[k] = reverseString(str[k]);
    }
    return str.join(" ");    
};
console.log(reverseWords("")); //""
console.log(reverseWords("a")); //"a"
console.log(reverseWords("a b c")); //"a b c"
console.log(reverseWords("Let's take LeetCode contest")); //"s'teL ekat edoCteeL tsetnoc"
