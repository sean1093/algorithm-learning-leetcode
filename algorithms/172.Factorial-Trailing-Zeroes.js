/**
 * 172. Factorial Trailing Zeroes
 * Given an integer n, return the number of trailing zeroes in n!.
 * @param {number} n
 * @return {number}
 */
// Q: 給予 n，找出 n! 中有多少 0
// A: 先找出有多找個 5
 // find how many 5 in n
 // ex: 5!= 5x4x3x2x1 --> there is only one 5 and 2 --> 5x2 =10 will has one 0
 // 25! have six '5' and must have more then six '2' --> so that will have six 0
var trailingZeroes = function(n) {
    if(n < 5) return 0;
    var count = 0;
    while(n>=5) {
        n = Math.floor(n/5);
        count += n;
    }
    return count;
};

console.log(trailingZeroes(5)); //1
console.log(trailingZeroes(10)); //2
console.log(trailingZeroes(25)); //6
