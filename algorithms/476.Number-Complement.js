/**
 * 476. Number Complement
 * Given a positive integer, output its complement number. 
 * The complement strategy is to flip the bits of its binary representation.
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var str = num.toString(2).split("");
    var output = "";
    for(var i in str){
        output += str[i] == '0'? 1 : 0;
    }
    return parseInt(output, 2);
};

console.log(findComplement(0)); // 1
console.log(findComplement(5)); // 2
console.log(findComplement(51)); // 12