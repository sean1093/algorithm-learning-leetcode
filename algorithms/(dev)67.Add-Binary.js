/**
 * 67. Add Binary
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var strA = a.split("");
    var strB = b.split("");
    
    var lenA = strA.length;
    var lenB = strB.length;
    
    if(lenA === 0) return b;
    if(lenB === 0) return a;
    
    var counter = lenA > lenB ? lenA : lenB;
    var stopCounter = lenA > lenB ? lenB : lenA;
    var targetStr = lenA > lenB ? strA : strB;
    var otherStr = lenA > lenB ? strB : strA;
    var upgrade = 0;
    console.log("counter: "+counter);
    console.log("stopCounter: "+stopCounter);
    console.log(targetStr);
    console.log(otherStr);
    for(var i = counter-1; i >= (counter - stopCounter); i--) {
        console.log("---");
        console.log("t: "+targetStr[i] );
        console.log("o: "+otherStr[i - (counter - stopCounter)]);
        var base = parseInt(targetStr[i],10) 
            + parseInt(otherStr[i - (counter - stopCounter)]);
        console.log("base: "+base);
        console.log("upgrade: "+upgrade);
        var up = false;
        if(base > 1) {
            base = 0;
            up = true;
        }
        targetStr[i] = upgrade + base;
        upgrade = 0;
        if(up) {
            console.log("upgrade++: "+upgrade);
            upgrade = 1;
        }
    }
    console.log(targetStr);
    if(upgrade > 0) {
        console.log("stopCounter: "+stopCounter);
        console.log("targetStr[stopCounter-1]++: "+targetStr[stopCounter-1]);
        targetStr[stopCounter-1] ++;  
    }
    console.log(targetStr);
    return targetStr.join("");
    
};

// console.log(addBinary("00", "11")); //11
// console.log(addBinary("00", "1")); //01
console.log(addBinary("11", "11")); //110
console.log(addBinary("110", "11")); //1001