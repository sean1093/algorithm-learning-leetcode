/**
 * 70. Climbing Stairs
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
 // W(n) = W(n-1) + W(n-2) : Fibonacci
var climbStairs = function(n) {
    if(n === 0) return 1; 
    var res = 0;
    var n1 = 1, n2 = 0;    
    for(var i = 1; i<=n; i++) {
        res = n1 + n2;
        n2 = n1;
        n1 = res;
    }
    return res;
};

console.log(climbStairs(0)); //1
console.log(climbStairs(1)); //1
console.log(climbStairs(2)); //2
console.log(climbStairs(3)); //3
console.log(climbStairs(4)); //5
console.log(climbStairs(5)); //8
console.log(climbStairs(6)); //13
