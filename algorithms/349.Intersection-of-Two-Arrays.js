/**
 * 349. Intersection of Two Arrays
 * Given two arrays, write a function to compute their intersection.
 * Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//先排序好，然後使用比較少的array使用binary search找長的array
//每次找到就更新要找的array，把前面的值去掉
var intersection = function(nums1, nums2) {
    //sort two array
    function sortNumber(a, b) {
        return a - b;
    }

    // search
    function search(key, target) {
        var left = 0;
        var mid = 0;
        var right = target.length-1;

        while(left <= right){
            mid = Math.round((left+right)/2);
            if(target[mid] > key){
                right = mid - 1;
            }
            else if(target[mid] < key){
                left = mid + 1;
            }
            else if(target[mid] === key){
                return mid;
            }
        }
        return null; //not found
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
        if(source[i] in res) {
            continue;
        }
        var idx = search(source[i], target);
        if(idx !== null) {
            res[source[i]] = source[i];
            target = target.slice(idx+1, target.length);
        }
    }
    for(var k in res) {
        re.push(res[k]);
    }
    return re;
};


console.log(intersection([1, 2, 2, 1], [2, 2])); //[2]
console.log(intersection([2, 2], [1, 2, 2, 1])); //[2]
console.log(intersection([1, 1], [3, 3, 5, 1])); //[1]
console.log(intersection([1, 7], [3, 3, 5, 9])); //[]
console.log(intersection([], [])); //[]
console.log(intersection([1], [1 ,2])); //[1]

