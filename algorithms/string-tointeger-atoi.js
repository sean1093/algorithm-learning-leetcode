/**
 * 08. String to Integer (atoi) - dev
 * Implement atoi to convert a string to an integer.
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var l = str.length;
    var flag = true, start = true, n = 0;
    var strArray = str.split("");
    var count = l;
    for(var i in strArray) {
    	// console.log(strArray[i]); 
    	console.log("n= "+n); 
    	console.log("i, l= "+i+", "+l); 
    	// console.log("n=0? "+n==0);
    	if(strArray[i] == " "){
    		if(start){
    			l--;
    		}
    		else{
    			n = n / Math.pow(10, (i-l));
	            return flag? n : n*-1;
    		}
    	}
		else if(strArray[i] == "-" || strArray[i] == "+") {
			flag = (strArray[i] == "-")? false : true; //negative
			l--; 
			start = false;
		}
		else{
	        var base = strArray[i] * Math.pow(10, (i-l));
	        console.log("base= "+base); 
	        if(isNaN(base)){
	            n = n / Math.pow(10, (i-l));
	            return flag? n : n*-1;
	        }
	        n += base;
	        start = false;
	        l--;
		}
    }
    return flag? n : n*-1;
};

// console.log("123"); 
// console.log(myAtoi("123")); 

// console.log("0"); 
// console.log(myAtoi("0")); 

// console.log(""); 
// console.log(myAtoi("")); //0

// console.log("-36"); 
// console.log(myAtoi("-36")); 

// console.log("aaa"); 
// console.log(myAtoi("aaa")); //0

// console.log("66.42"); 
// console.log(myAtoi("66.42")); //66 

// console.log("-36.66"); 
// console.log(myAtoi("-36.66")); // -36

// console.log("+1"); 
// console.log(myAtoi("+1")); //1

console.log("     +004500"); 
console.log(myAtoi("     +004500")); //4500 

// console.log("   +0 123"); 
// console.log(myAtoi("   +0 123")); //0

// console.log("1 23"); 
// console.log(myAtoi("1 23")); //1