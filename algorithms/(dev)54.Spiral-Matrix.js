/**
 * 54. Spiral Matrix
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    var output = [];

    var i=0;
    
    var r = 0;
    var d = 0;
    var l = matrix[0].length -1;
    var u = matrix.length -1;

    // right
    for(i = r; i < matrix[0].length - r; i++) {

    }

    // down
    for(i = d; i < matrix.length - d; i++) {

    }

    // left
    for(i = l; i > matrix[0].length - l; i--) {

    }

    // up
    for(i = 0; i < matrix.length; i++) {

    }
    // delete level 1

    // continue level 2 ... n

    return output;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); //[1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4,5],[4,5,6,7,5],[7,8,9,7,5],[5,5,5,5,5]])); //[1,2,3,4,5,5,5,5,5,5,5,5,7,4,5,6,7,7,9,8]




