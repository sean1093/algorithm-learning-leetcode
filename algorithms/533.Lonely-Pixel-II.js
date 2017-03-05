/**
 * 533. Lonely Pixel II
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
var findBlackPixel = function(picture, N) {
    var count = 0;
    for(var i = 0; i < picture.length ; i++) {        
        var flag = 0;
        var idx = 0;
        for( var j = 0; j < picture[i].length; j++) {
            // if(flag > 1) break;
            if(picture[i][j] == 'B') {
                flag ++;
                // idx = j;
            }           
        }
        console.log("flag: "+flag);
        if(flag == N) {
            flag = 0;
            for(var k = 0; k < picture.length; k++) {
                if(picture[k][idx] == 'B') {
                    flag ++;
                }           
            }
            if(flag == N) {
                count ++;
            }
        }
    }
    return count;    
};

console.log(findBlackPixel(["WBWBBW","WBWBBW","WBWBBW","WWBWBW"], 3)); //6
