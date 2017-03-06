/**
 * 531. Lonely Pixel I
 * Given a picture consisting of black and white pixels, find the number of black lonely pixels.
 * The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.
 * A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
    var count = 0;
    for(var i = 0; i < picture.length ; i++) {        
        var flag = 0;
        var idx = 0;
        for( var j = 0; j < picture[i].length; j++) {
            if(flag > 1) break;
            if(picture[i][j] == 'B') {
                flag ++;
                idx = j;
            }           
        }
        if(flag == 1) {
            flag = 0;
            for(var k = 0; k < picture.length; k++) {
                if(picture[k][idx] == 'B') {
                    flag ++;
                }           
            }
            if(flag == 1) {
                count ++;
            }
        }
    }
    return count;
};
console.log(findLonelyPixel([['W', 'W', 'w'],['W', 'w', 'W'],['w', 'W', 'W']])); //0
console.log(findLonelyPixel([['W', 'W', 'B'],['W', 'B', 'W'],['B', 'W', 'W']])); //3
console.log(findLonelyPixel([['W', 'W', 'B'],['B', 'B', 'W'],['B', 'W', 'W']])); //1
console.log(findLonelyPixel([['W', 'B', 'B'],['W', 'B', 'W'],['B', 'W', 'W']])); //1
console.log(findLonelyPixel([['W', 'B', 'W'],['W', 'w', 'W'],['B', 'W', 'W'],['W', 'W', 'W']])); //2
console.log(findLonelyPixel([['B', 'W', 'W', 'W'],['W', 'W', 'B', 'W'],['W', 'B', 'W', 'W'], ['W', 'W', 'W', 'B']])); //4

