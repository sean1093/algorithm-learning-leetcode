/**
 * 198. House Robber
 * @param {number[]} nums
 * @return {number}
 */

// Q: 如果你連偷兩間相鄰的房子，就會被抓。給一個list，裡面每個元素都代表這間房子內可以偷到的錢，如何偷到最大值。
// A: 因為不能連續偷，所以每次 i 會看 (i-1) & (i)+(i-2) 這兩者哪個比較大，代表在這間房的時候最多可以偷到多少錢
// 把每次的值放入一個一樣位置的陣列，一直往後檢查到最後一個就會是最大值
// 每次check: Math.max(money[i-1], nums[i] + money[i-2])

var rob = function(nums) {
    if(nums.length === 0) return 0;
    else if(nums.length == 1) return nums[0];
    else if(nums.length == 2) return Math.max(nums[0], nums[1]);

    var money = [];
    money.push(nums[0]);
    money.push(Math.max(nums[0], nums[1]));

    for(var i = 2; i<nums.length; i++) {
        money.push(Math.max(money[i-1], nums[i] + money[i-2]));
    }
    return money[nums.length-1];
};
console.log(rob([2,1,1,1])); //3
console.log(rob([2,1,1,2])); //4
console.log(rob([2,4,5,3])); //7
console.log(rob([2,4,5,7,1,0,9])); //20
