/**
 * 88. Merge Sorted Array
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 // 1. put num2 into num1. 2. sort num1
var merge = function(nums1, m, nums2, n) {
    var idx = 0;
    for(var i = m ; i < m+n ; i++){
        nums1[i] = nums2[idx];
        idx++;
    }

    function sortNumber(a,b) {
        return a - b;
    }
    nums1.sort(sortNumber);
    console.log(nums1);
};


// var merge = function(nums1, m, nums2, n) {
//     var len = m + n;
//     var i = 0, j = 0;
//     for(var k = 0; k < len; k++) {
//         if(n === 0) {
//             break;
//         }
//         if(m === 0) {
//             nums1 = nums2.slice(0);
//             break;
//         }
//         if(nums1[i] > nums2[j]) {
//             nums1.splice(i, 0, nums2[j]);
//         }
//         else {
//             nums1.splice(i+1, 0, nums2[j]);
//         }
//         i+=2;
//         j++;
//     }
//     if(n !== 0 || m !== 0)
//         nums1.length = len;
//     console.log(nums1);
// };
merge([],0,[],0); //[]
merge([0],0,[1],1); //[1]
merge([1],1,[],0); //[1]
merge([1,2,4],3,[2,3],2); //[1,2,2,3,4]
merge([1],1,[2,2,3,4],4); //[1,2,2,3,4]
merge([0,1],0,[1,4,6,7],4); //[1,4,6,7]



