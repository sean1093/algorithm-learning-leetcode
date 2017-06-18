/**
 * 118. Pascal's Triangle
 * Given numRows, generate the first numRows of Pascal's triangle.
 * @param {number} numRows
 * @return {number[][]}
 */

// Q: 給予 numRows ，畫出 Pascal's Triangle 
// ex: r = 3
// result:
//   [1]
//  [1,1]
// [1,2,1]

// A: 先找規律 [i,j] = [i-1,j-1] + [i-1, j]


var generate = function(numRows) {   
    if(numRows === 0) return [];
    var res = [[1]];
    for(var i = 1; i < numRows; i++) {
        var preRow = res[i-1];
        var row = [1];
        for(var j = 1; j <= i; j++) {
            var pre =  preRow[j-1];
            var cur =  preRow[j] ? preRow[j] : 0;
            row.push(pre+cur);  
        }
        res.push(row);
    }
    return res;
};

console.log(generate(0)); //[]
console.log(generate(1)); //[[1]]
console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]