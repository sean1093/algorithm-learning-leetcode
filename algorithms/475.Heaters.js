/**
 * 475. Heaters
 * **** not finsish
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

    console.log(houses);
    console.log(heaters);

    var radius = heaters[0] - 1; //first
    var r = 0;
    var i = 1;  
    // console.log("heaters.length: "+heaters.length);  
    for(; i < heaters.length; i++) {
        // console.log("heaters[i]: "+heaters[i]);
        // console.log("houses[houses.length-1]: "+houses[houses.length-1]);
        if(heaters[i] > houses[houses.length-1]) {
            break;
        }
        r = Math.ceil((heaters[i] - heaters[i-1] - 1)/2);
        radius = r > radius? r : radius; 
    }
    // console.log("i: "+i);
    //last
    r = houses[houses.length-1] - heaters[i-1];
    radius = r > radius? r : radius;

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

