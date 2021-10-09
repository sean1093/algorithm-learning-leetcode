/**
 * 342. Power of Four
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 * Follow up: Could you solve it without loops/recursion?
 * @param {number} num
 * @return {boolean}
 */
 // divide 4 until < 4, num is a power of 4 if left = 1 
var isPowerOfFour = function(num) {
    if(num < 1) return false;
    if(num == 1) return true;
    if(num%2 == 1) return false; // odd number --> return false

    while(num >= 4) {
        if(num % 4 !== 0) 
            return false;
        num = num/4;
    }
    return num == 1? true : false;   
};

console.log(isPowerOfFour(16)); //true
console.log(isPowerOfFour(9)); //false
console.log(isPowerOfFour(20)); //false

