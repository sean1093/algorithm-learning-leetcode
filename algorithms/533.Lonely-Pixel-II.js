/**
 * 533. Lonely Pixel II
 * *** Not finish ****
 * Given a picture consisting of black and white pixels, and a positive integer N, find the number of black pixels located at some specific row R and column C that align with all the following rules:
 * Row R and column C both contain exactly N black pixels.
 * For all rows that have a black pixel at column C, they should be exactly the same as row R
 * The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively.
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
var findBlackPixel = function(picture, N) {

    var result = 0;
    // find row which number of 'B' = N
    var count = 0;
    var row = [];
    for(var i = 0; i < picture.length ; i++) {        
        for( var j = 0; j < picture[i].length; j++) {
            if(picture[i][j] == 'B') {
                count++;
            }
            if(count > N)
                break;
        }
        if(count == N){
            row.push(i);
        }
        count = 0;
    }
    // console.log(row);

    // start to check column
    count = 0;
    for(var key in row){
        for( var k = 0; k < picture[key].length; k++) {
            // console.log("i/j: "+row[key]+"/"+k+", ="+picture[row[key]][k]);
            if(picture[row[key]][k] == 'B') {
                for(var t = 0; t < picture.length ; t++) {
                    if(picture[t][k] == 'B'){
                        count++;
                    }
                    if(count > N)
                        break;
                }
                if(count == N){
                   result++; 
                }
                count = 0;
            }
        }
    }

    return result;
   
};
console.log(findBlackPixel(["WBW","BWB","BWB"], 2)); //4
console.log(findBlackPixel(["WBWBBW","WBWBBW","WBWBBW","WWBWBW"], 3)); //6
console.log(findBlackPixel(["BWWWW","WWBWW","WWWWW","BBBBB","WWWBB"], 2)); //2
console.log(findBlackPixel(["WBWBBW","BWBWWB","WBWBBW","BWBWWB","WWWBBW","BWBWWB"], 3)); //9


