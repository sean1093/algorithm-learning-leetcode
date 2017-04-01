/**
 * 263. Ugly Number
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 
 * For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
 * Note that 1 is typically treated as an ugly number.
 * @param {number} num
 * @return {boolean}
 */
  // divide 2,3,4 until < 2, num is a Ugly Number if left = 1
  // similar: 342. Power of Four
var isUgly = function(num) {
    if(num == 1) return true;
    else if(num < 1) return false;
    else if(num <= 6) return true;
    while(num >= 2) {
        if(num%5 === 0) {
            num = num/5;
        }
        else if(num%3 === 0) {
            num = num/3;
        }
        else if(num%2 === 0) {
            num = num/2;
        }
        else {
            return false;
        }
    }
    return num == 1;
};

console.log(isUgly(6)); // true
console.log(isUgly(8)); // true
console.log(isUgly(14)); // false
