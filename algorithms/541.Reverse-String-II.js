/**
 * 541. Reverse String II
 * Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. 
 * If there are less than k characters left, reverse all of them. 
 * If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
 * The string consists of lower English letters only.
 * Length of the given string and k will in the range [1, 10000]
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var str = s.split("");
    var _swap = function(x, y, array){
        var temp = array[y];
        array[y] = array[x];
        array[x] = temp;
    };
    if(str.length <= k){
        var mid = Math.floor((str.length)/2);
        for(var t = 0; t < mid; t++){
            _swap(t, str.length-1-t, str);
        }
    }
    else{
        for(var i =0; i<str.length; i=i+2*k) {
            //revers i~k
            var mid = i + Math.floor(k/2);
            for(var j = i; j < mid; j++){
                _swap(j, ((i+k-1)-(j-i)), str);
            }
        }       
    }
    return str.join(""); 
};

console.log(reverseStr("abcdefg", 2)); // bacdfeg
console.log(reverseStr("abcdefg", 4)); // dcbaefg
console.log(reverseStr("abcd", 4)); // dcba
console.log(reverseStr("a", 1)); // a
console.log(reverseStr("hello", 2)); // ehllo

