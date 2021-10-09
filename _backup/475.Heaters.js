/**
 * 475. Heaters
 * find max(min())
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    
    function sortNumber(a,b) {
        return a - b;
    }
    heaters.sort(sortNumber);
    houses.sort(sortNumber);
    var h = houses.length;
    var t = heaters.length;
    var radius = 0;
    for(var i=0; i<h; i++){
        var min = houses[h-1] > heaters[t-1]? houses[h-1]:heaters[t-1];
        //find min
        for(var j = 0; j<t ; j++){
            var diff = Math.abs(heaters[j]-houses[i]);
            min = min >= diff? diff : min;
            if(diff > min) break;
        }
        //find max
        radius = radius < min? min : radius;
    }
    return radius;  
};
console.log(findRadius([1,2,3],[2])); // 1
console.log(findRadius([1,2,3,4],[1,4])); // 1
console.log(findRadius([1,2,3,5,8],[3,7])); // 2
console.log(findRadius([1,2,3,4,5,6,7,8],[6,2])); // 2

console.log(findRadius([1,2,3,5,15],[2,30])); // 13
console.log(findRadius([1,2,3,4,15,6,7,8,11],[9,2,38])); // 6

console.log(findRadius([282475249,622650073,984943658,144108930,
    470211272,101027544,457850878,458777923],
[823564440,115438165,784484492,74243042,
114807987,137522503,441282327,16531729,823378840,143542612])); //161834419 

console.log(findRadius([1,5],[10])); // 9

