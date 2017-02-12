/**
 * 504. Base 7 
 * Given an integer, return a base 7 representation of it as a String.
 * @param {number} num
 * @return {string}
 */
var convertTo7 = function(num) {
    var str = "";
    var base = num;
    var left = 0;
    while(base>7){

        base = Math.floor(base/7);
        console.log("base: "+base); 
        // console.log("(base*7): "+(base*7));
        // console.log("num: "+num);
        // num = num - (base*7);
        left = Math.floor(num % 7);
        str += left;
        
        
        console.log("left: "+left);

        console.log("---str: "+str);
    }
    console.log("num: "+num.toString(7));
    return str;
};

/*
class Solution {
public:
    string convertTo7(int num) {
        if(num == 0)
            return "0";
        string ans = "";
        bool neg = false;
        if(num < 0)
        {
            neg = true;
            num = -num;
        }
        while(num)
        {
            string tmp = ans;
            ans = "";
            ans += (char) ('0' + (num % 7));
            ans += tmp;
            num /= 7;
        }
        if(neg)
            ans = "-" + ans;
        return ans;
    }
};



*/

console.log(convertTo7(100)); // "202"