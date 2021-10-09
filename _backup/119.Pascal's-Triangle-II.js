/**
 * 119. Pascal's Triangle II
 *
 * Given an index k, return the kth row of the Pascal's triangle.
 * For example, given k = 3, Return [1,3,3,1].
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 * @param {number} rowIndex
 * @return {number[]}
 */

// Q: 給予階層數，回傳Pascal's Triangle在那層的長相，並且只能使用O(k) extra space => 只能用一維陣列
// A: 從第一層開始累加到要找的層數，要從每一層的後面往前加，undefined都視為0
// ex: 第二層[1,2,1]
// 會先做第一層的最後一個數 -> 倒數第二個數
// res[1] = res[1] + res[0] = 0 + 1 = 1
// res[0] = res[0] + res[-1] = 1 + 0 = 1
// 再來做第二層
// res[2] = res[2] + res[1] = 0 + 1 = 1
// res[1] = res[1] + res[0] = 1 + 1 = 2
// res[0] = res[0] + res[-1] = 1 + 0 = 1
// 接著就依此類推...

var getRow = function(rowIndex) {
    var res = [1];
    // start from level 2
    for(var i = 0; i < rowIndex+1; i++) {
        for(var j = i; j >=0; j--) {
            res[j] = (res[j] !== undefined ? res[j] : 0) + (res[j-1] !== undefined ? res[j-1] : 0);
        }
    }
    return res;
};
console.log(getRow(-1)); //[1]
console.log(getRow(0)); //[1]
console.log(getRow(1)); //[1,1]
console.log(getRow(2)); //[1,2,1]
console.log(getRow(3)); //[1,3,3,1]
console.log(getRow(4)); //[1,4,6,4,1]



