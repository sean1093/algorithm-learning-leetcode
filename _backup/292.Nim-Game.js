/**
 * 292. Nim Game
 * You are playing the following Nim Game with your friend: 
 * There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. 
 * The one who removes the last stone will be the winner. 
 * You will take the first turn to remove the stones.
 * For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.
 * @param {number} n
 * @return {boolean}
 */
// 一次可以拿1~3顆石頭，所以一開始如果<3就會獲勝
// 當一開始是4顆的時候，不管怎麼樣都會輸
// 接著5: 5-1=4 五顆的時候只要拿走一顆，對方一定輸
// 6: 6-2=4, 7:7-3=4
// 但是到8的時候不管怎樣都還是會輸，所以可以推得4的倍數就一定會輸

var canWinNim = function(n) {
    return (n%4 !== 0);    
};
console.log(canWinNim(0)); //false
console.log(canWinNim(1)); //true
console.log(canWinNim(4)); //false
console.log(canWinNim(5)); //true
console.log(canWinNim(8)); //false