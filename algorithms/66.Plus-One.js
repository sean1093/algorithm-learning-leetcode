/**
 * 66. Plus One
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * 
 * @param {number[]} digits
 * @return {number[]}
 */

// Q: 給一包含非數整數的陣列，其中每一個值代表該位數的值，對這個陣列加1
// A: 加法進位問題，從陣列最後一個開始+1，假如有進位再往下繼續做，沒有進位就直接break結束了
// 例外情況是做到最後一個(陣列第一個)的時候，有進位就要在陣列最前端塞一個1(利用unshift)

var plusOne = function(digits) {   
    var idx = digits.length - 1;
    while(idx >= 0){
        if(digits[idx] >= 9){
            digits[idx] = 0;
            if(idx === 0) {
                digits.unshift(1); 
            }
        }
        else{
            digits[idx] = digits[idx] + 1;
            break;
        }
        idx--;
    }       
    return digits;
};

console.log(plusOne([0])); // [1]
console.log(plusOne([5,9,9])); // [6,0,0]
console.log(plusOne([9])); // [1,0]

