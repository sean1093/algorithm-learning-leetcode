/**
 * 66. Plus One
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * 給一包含非數整數的陣列，其中每一個值代表該位數的值，對這個陣列加1
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {   
    var idx = digits.length - 1;
    while(idx >= 0){
        if(digits[idx] >= 9){
            digits[idx] = 0;
            if(idx == 0) {
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

