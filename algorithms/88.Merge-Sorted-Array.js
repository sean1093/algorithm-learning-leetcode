/**
 * 88. Merge Sorted Array
 * 
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// Q: merge兩個排序好的array
// A: 把num2塞入num1之後，再重新排列num1即可

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

merge([],0,[],0); //[]
merge([0],0,[1],1); //[1]
merge([1],1,[],0); //[1]
merge([1,2,4],3,[2,3],2); //[1,2,2,3,4]
merge([1],1,[2,2,3,4],4); //[1,2,2,3,4]
merge([0,1],0,[1,4,6,7],4); //[1,4,6,7]



