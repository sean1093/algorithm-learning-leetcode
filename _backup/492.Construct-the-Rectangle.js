/**
 * 492. Construct the Rectangle
 * Input: 4, Output: [2, 2]
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    if(area===0) return [];
    var mid = Math.ceil(Math.sqrt(area));
    for(; mid <= area; mid++){
        if(area%mid===0){
            return [mid, area/mid];
        }
    }
};


console.log(constructRectangle(4)); // [2,2]
console.log(constructRectangle(6)); // [3,2]
console.log(constructRectangle(7)); // [7,1]
console.log(constructRectangle(25)); // [5,5]
console.log(constructRectangle(77)); // [11,7]