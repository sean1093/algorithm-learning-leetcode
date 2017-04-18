/**
 * 204. Count Primes - dev
 * @param {number} n
 * @return {number}
 */
//Time Limit Exceeded
//https://zh.wikipedia.org/zh-cn/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95
//https://skyyen999.gitbooks.io/-leetcode-with-javascript/content/questions/204md.html
var countPrimes = function(n) {
    var isPrime = [];
    var base = 3; // start from 3
    var count = 1; // already has 2
    if(n < base) return 0;
    if(n == base) return 1;
    var flag = true;     
    while(base <= n){
        if(isPrime.length === 0) {
            // console.log("* isPrime: "+base);
            isPrime.push(base);
            count++; 
        }
        else{
            for(var i = 0; i*i < n; i++){  
                if(base % isPrime[i] === 0) {
                    flag = false;
                    break;
                }
            }
            if(flag){
                // console.log("isPrime: "+base);
                isPrime.push(base);
                count++;                
            }         
        }
        flag = true;
        base += 2; // only get odd
    }
    return count;
};


console.log(countPrimes(0)); //0
console.log(countPrimes(1)); //0
console.log(countPrimes(2)); //0
console.log(countPrimes(3)); //1
console.log(countPrimes(25)); //9
