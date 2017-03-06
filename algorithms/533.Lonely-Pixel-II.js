/**
 * 533. Lonely Pixel II
 * Given a picture consisting of black and white pixels, and a positive integer N, find the number of black pixels located at some specific row R and column C that align with all the following rules:
 * Row R and column C both contain exactly N black pixels.
 * For all rows that have a black pixel at column C, they should be exactly the same as row R
 * The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.
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
