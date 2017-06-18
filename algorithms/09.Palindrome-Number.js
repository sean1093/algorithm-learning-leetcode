/**
 * 09. Palindrome Number
 * Determine whether an integer is a palindrome. Do this without extra space.
 
 * @param {number} x
 * @return {boolean}
 */

// Q: 檢查數字是不是迴文
// A: 把原始x值做反轉來比較，假如一致就是迴文
// 1. 先把負號取出來
// 2. 每次除以10的最高位數次方，把它轉移到最低位數

var isPalindrome = function(x) {
    
	//07. Reverse digits of an integer.
	var old = x;
    var INT_MAX = Math.pow(2,31)-1; //overflows
    var n = 0, i = 0;    
    if(x < 0) { //negative 
        x = Math.abs(x);
    }
    l = x.toString().length;
    for(l; l>0; l--){
        n += Math.floor( x / Math.pow(10, (l-1))) * Math.pow(10, i);
        x = x % Math.pow(10, (l-1)); 
        i++;
    }
    if(n > INT_MAX || n < -(1+INT_MAX)) return false;
    if(old == n) return true;
    else return false;

};

console.log(isPalindrome(-123)); // false
console.log(isPalindrome(123)); // false
console.log(isPalindrome(31213)); // true
console.log(isPalindrome(-2147483648)); // false
console.log(isPalindrome(999999959999999)); // false


