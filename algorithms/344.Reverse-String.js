/**
 * 344. Reverse String
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str = s.split("");
    var _swap = function(x, y, array){
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

console.log(reverseString("hello")); // olleh
console.log(reverseString("abcd")); // dcba
console.log(reverseString("a")); // a
console.log(reverseString("")); // 