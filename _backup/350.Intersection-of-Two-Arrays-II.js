/**
 * 350. Intersection of Two Arrays II
 * Given two arrays, write a function to compute their intersection.
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 先排序好，然後使用比較少的array使用暴力法search找長的array
// (不能使用binary search的原因，因為如果有相同的要找第一個出現的，用binary search會找到離中間最近的)
// 每次找到就更新要找的array，把前面的值去掉
var intersect = function(nums1, nums2) {
    //sort two array
    function sortNumber(a, b) {
        return a - b;
    }

    // search
    function search(key, target) {
        for(var i = 0; i< target.length; i++) {
            if(target[i] == key) 
                return i;
        }
        return null;
    }

    nums1.sort(sortNumber);
    nums2.sort(sortNumber);
    var res = {};
    var re = [];
    var target, source;
    if(nums1.length >= nums2.length) {
        target = nums1; 
        source = nums2;      
    }
    else {
        target = nums2; 
        source = nums1;       
    }

    for(var i = 0; i<source.length; i++) {
        var idx = search(source[i], target);
        if(idx !== null) {
            res[i] = source[i];
            target = target.slice(idx+1, target.length);
        }
    }
    for(var k in res) {
        re.push(res[k]);
    }
    return re;
};

console.log(intersect([0,0,1], [0,0,0])); //[0,0]
console.log(intersect([1, 2, 2, 1], [2, 2])); //[2, 2]
console.log(intersect([2, 2], [1, 2, 2, 1])); //[2, 2]
console.log(intersect([1, 1], [3, 3, 5, 1])); //[1]
console.log(intersect([1, 7], [3, 3, 5, 9])); //[]
console.log(intersect([], [])); //[]
console.log(intersect([1], [1 ,2])); //[1]





