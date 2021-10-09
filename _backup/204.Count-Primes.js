/**
 * 204. Count Primes
 * Count the number of prime numbers less than a non-negative number, n.
 * @param {number} n
 * @return {number}
 */
// Q: 找出小於n的質數個數
// A: 從3開始找奇數(target)來檢查是不是質數，每次都只找到 i*i<target就可以了
// TODO: 使用 sieve of Eratosthenes 再做一次更快的方法
// https://zh.wikipedia.org/zh-cn/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95

var countPrimes = function(n) {
    if(n < 3) return 0;
    var count = 1; // already has 2    
    for(var i = 3 ; i < n ; i+=2) {       
        var flag = true; // isPrime
        for(var j = 3 ; j*j <= i; j+=2){
            if(i%j === 0){
                flag = false; 
                break;
            }
        }
        if(flag) count++;
    }
    return count;
};


console.log(countPrimes(0)); //0
console.log(countPrimes(1)); //0
console.log(countPrimes(2)); //0
console.log(countPrimes(3)); //1
console.log(countPrimes(25)); //9
