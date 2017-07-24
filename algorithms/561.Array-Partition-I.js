/**
 * 561. Array Partition I
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 * 
 * Input: [1,4,3,2]
 * Output: 4
 * Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 * 
 * @param {number[]} nums
 * @return {number}
 */

// Q: 給一個2n數的數列，找出n個pair(兩數)的最小值加總成最大
// Max[min(a1,b1)...min(an,bn)]

// A: 先排列好，然後找奇數列相加總就可以了
// 要找兩值最小加總成最大，按照順序組成pair的最小值加總會是最大
// ex: [1,4,3,2]
// 1,2,3,4 ==> 1,3這樣會是最大，其他不管怎麼排都會使得最小值會是1&2，所以按順序排


var arrayPairSum = function(nums) {
    if(nums.length % 2 === 0) {
        var n = nums.length / 2;
        var res = 0;
        nums.sort(function(a,b){return a-b;});
        for(var i = 0; i<nums.length; i=i+2) {
            res += nums[i];
        }
        return res;
    } 
};