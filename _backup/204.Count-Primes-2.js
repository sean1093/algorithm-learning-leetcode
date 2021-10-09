/**
 * 204. Count Primes
 * Count the number of prime numbers less than a non-negative number, n.
 * @param {number} n
 * @return {number}
 */
// Q: 找出小於n的質數個數
// A: 使用 sieve of Eratosthenes 
// 把倍數都標記起來，ex: 2, 2*2, 2*3... 然後 3, 3*2, 3*3.... 剩下的就會是質數
// https://zh.wikipedia.org/zh-cn/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95

const countPrimes = function(n) {
    let count = 0;
    let signs = new Array(n);
    if (n === 0 || n === 1) return 0;

    for (let i = 2; i < n; i++) {
        if (!signs[i - 1]) {
            count++;
            
            for (let j = i * i; j <= n; j += i) {
                signs[j - 1] = true;
            }
        }
    }
    return count;
};


console.log(countPrimes(0)); //0
console.log(countPrimes(1)); //0
console.log(countPrimes(2)); //0
console.log(countPrimes(3)); //1
console.log(countPrimes(25)); //9
