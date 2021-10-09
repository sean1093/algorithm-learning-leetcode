/**
 * 219. Contains Duplicate II
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Q: 找出陣列中相等的兩個值，且距離不可以超過k，有的話回傳true，沒有false
// A: 用一個map去記錄出現過的數字，當再次出現的時候去看兩者距離有沒有超過k，超過就繼續找
// 最後陣列找完，都沒有的話就是回傳false

var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;
    var hashMap = {};   
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] in hashMap && (i - hashMap[nums[i]]) <= k) {
            return true;
        }
        else {
            hashMap[nums[i]] = i;
        }
    } 
    return false;
};