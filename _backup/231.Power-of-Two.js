/**
 * 231. Power of Two
 * Given an integer, write a function to determine if it is a power of two.
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 1) return false;
    if(n == 1) return true;
    if(n%2 == 1) return false; // odd number --> return false

    while(n >= 2) {
        if(n % 2 !== 0) 
            return false;
        n = n/2;
    }
    return n == 1;   
};

console.log(isPowerOfTwo(3)); //false
