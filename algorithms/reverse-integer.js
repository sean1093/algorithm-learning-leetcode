/**
 * Reverse digits of an integer.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var INT_MAX = Math.pow(2,31)-1; //overflows
    var flag = true, n = 0, i = 0;    
    if(x < 0) { //negative 
        x = Math.abs(x);
        flag = false;
    }
    l = x.toString().length;
    for(l; l>0; l--){
        n += Math.floor( x / Math.pow(10, (l-1))) * Math.pow(10, i);
        x = x % Math.pow(10, (l-1)); 
        i++;
    }
    if(n > INT_MAX || n < -(1+INT_MAX)) return 0;
    return flag? n : n*-1;
};


console.log(reverse(123)); // 321
console.log(reverse(100)); // 1
console.log(reverse(59257)); // 75295
console.log(reverse(0)); // 0
console.log(reverse(-123)); // -321
console.log(reverse(1000000003)); // 0: overflows
console.log(reverse(-2147483648)); // 0: overflows
