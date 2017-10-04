/**
 * 168. Excel Sheet Column Title
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 * @param {number} n
 * @return {string}
 */
// Q: 輸入數值，回傳對應的 Excel 規則 header
// A: 根據 UTF-8 Basic Latin，大寫 A: Dec = 65
// 並且利用 String.fromCharCode(n)，傳入 Dec code 來找對應的大寫字母
// Base 26 and use UTF-8 C0 Controls and Basic Latin
// https://www.w3schools.com/charsets/ref_utf_basic_latin.asp
// 每次都除 26，分別把餘數去轉換成字母，並且看看有沒有超過 26 (透過 n/26>0?)
// 假如有超過26，表示他不只一層，把新的n再去做上一個步驟，轉乘字母的餘數就放到res不斷累加

var convertToTitle = function(n) {
    var res = "";
    while(n > 0) {
        base = Math.floor((n-1) % 26);
        n = Math.floor((n-1) / 26); 
        res = String.fromCharCode(base+65) + res;    
    }
    return res;
};


console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(100)); // CV
console.log(convertToTitle(702)); // ZZ
console.log(convertToTitle(703)); // AAA
console.log(convertToTitle(100998)); // ESJN
