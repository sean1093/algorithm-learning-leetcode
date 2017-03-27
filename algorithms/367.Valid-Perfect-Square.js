/**
 * 367. Valid Perfect Square
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 * Do not use any built-in library function such as sqrt.
 * @param {number} num
 * @return {boolean}
 */
//先找num一半的數字看平方有沒有大於num，大於的話除以2，直到小於的數字n找 n ~ 2*n 之間的數字 
var isPerfectSquare = function(num) {
    if(num == 1) return true;
    var base = Math.floor(num/2);
    var n = base*base;
    while(n > num) {
        base = Math.floor(base/2);
        n = base*base;
    }
    // find base ~ base*2
    for(var i = base; i < base*2 ; i++) {
        if(i*i == num) 
            return true;
    }
    return false;  
};
console.log(isPerfectSquare(0)); //false
console.log(isPerfectSquare(1)); //true
console.log(isPerfectSquare(25)); //true
console.log(isPerfectSquare(20)); //false
console.log(isPerfectSquare(15129)); //true
console.log(isPerfectSquare(15128)); //false
console.log(isPerfectSquare(15130)); //false
