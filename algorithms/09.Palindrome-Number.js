/**
 * 09. Palindrome Number
 * Determine whether an integer is a palindrome. Do this without extra space.
 * @param {number} x
 * @return {boolean}
 */
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


