/**
 * 326. Power of Three
 * Given an integer, write a function to determine if it is a power of three.
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n < 1) return false;
    if(n == 1) return true;
    if(n%2 === 0) return false; 

    while(n >= 3) {
        if(n % 3 !== 0) 
            return false;
        n = n/3;
    }
    return n == 1;   
};

console.log(isPowerOfThree(3)); //true
console.log(isPowerOfThree(9)); //true
console.log(isPowerOfThree(6)); //false