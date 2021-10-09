/**
 * 08. String to Integer (atoi)
 * Implement atoi to convert a string to an integer.
 * @param {string} str
 * @return {number}
 */
// Q: 實作將 string 轉換為數值
// A: 
// 1. 把string先轉成 string[]
// 2. 判斷文字前面出現非數字的情況，例如空白或是正負號。同時把正負數記錄下來
// 3. 開始檢查數值，當出現空白或是非數值就結束，每次數值乘上 10 的剩餘長度-1次方
// 4. 最後return之前還要先檢查有沒有超過上下限

var myAtoi = function(str) {
    var INT_MAX = Math.pow(2,31)-1; //overflows
    var l = str.length;
    var flag = null, start = true, n = 0;
    var strArray = str.split("");
    for(var i in strArray) {
        if(strArray[i] != " " || start === false){
            start = false;
            if((strArray[i] == "-" || strArray[i] == "+") && flag === null) {
                flag = (strArray[i] == "-")? false : true; //negative
            }
            else{
                var base = strArray[i] * Math.pow(10, (l-1));
                if(isNaN(base) || strArray[i] == " "){
                    n = n / Math.pow(10, (l));
                    break;
                }
                n += base;
            }
        }
        l--;          
    }
    n = (flag === true || flag === null)? n : n*-1;
    if(n > INT_MAX) n = INT_MAX;
    if(n < -(1+INT_MAX) ) n = -(1+INT_MAX);
    return n;
};

console.log("123"); 
console.log(myAtoi("123")); 

console.log("0"); 
console.log(myAtoi("0")); 

console.log(""); 
console.log(myAtoi("")); //0

console.log("-36"); 
console.log(myAtoi("-36")); 

console.log("aaa"); 
console.log(myAtoi("aaa")); //0

console.log("66.42"); 
console.log(myAtoi("66.42")); //66 

console.log("-36.66"); 
console.log(myAtoi("-36.66")); // -36

console.log("+1"); 
console.log(myAtoi("+1")); //1

console.log("     +004500"); 
console.log(myAtoi("     +004500")); //4500 

console.log("   +0 123"); 
console.log(myAtoi("   +0 123")); //0

console.log("1 23"); 
console.log(myAtoi("1 23")); //1

console.log("+-2"); 
console.log(myAtoi("+-2")); //0

console.log("2147483648"); 
console.log(myAtoi("2147483648")); //2147483647

console.log("-214748369948"); 
console.log(myAtoi("-214748369948")); //-2147483648

console.log("1a"); 
console.log(myAtoi("1a")); //1
