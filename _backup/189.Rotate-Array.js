/**
 * 189. Rotate Array
 * Rotate an array of n elements to the right by k steps.
 * For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 最簡單做法 array unshift + pop
var rotate1 = function(nums, k) {
    var step = k % nums.length;
    for(var i = 0 ; i < step ; i++){
        var value = nums.pop();
        nums.unshift(value);
    }
};

// 這個有點不太一樣，再檢查
//參考解法二的思路：https://github.com/julycoding/The-Art-Of-Programming-By-July/blob/master/ebook/zh/01.01.md
// abcdef, k=2 -> reverse 2 part: cba|fed  -> reverse one more time: defabc
var rotate = function(nums, k) {
    var length = nums.length;
    var _swap = function(x, y, array){
        var temp = array[y];
        array[y] = array[x];
        array[x] = temp;
    };
    var _reverse = function(array, i, j) { //reverse i~j in array
        var count = 0, mid = Math.floor((i+j+1)/2);
        for(; i < mid; i++) {
            _swap(i, (j-count), array);
            count ++;
        }
    };
    if(k !== 0 && nums.length > 1) {
        if(k >= nums.length-1) {
           // reverse 0~k
            _reverse(nums, 0, k); 
        }
        else {
            // reverse 0~k
            _reverse(nums, 0, k);
            // reverse k~n
            _reverse(nums, (k+1), nums.length-1);
            // reverse all
            _reverse(nums, 0, nums.length-1);              
        }                        
    }
    nums.length = length;
    console.log(nums.toString());
};

rotate([1,2,3,4,5,6,7],3); //[5,6,7,1,2,3,4]
rotate([1],0); //[1]
rotate([1],1); //[1]
rotate([1,2],0); //[1,2]
rotate([1,2],1); //[2,1]
rotate([1,2],2); //[1,2]


