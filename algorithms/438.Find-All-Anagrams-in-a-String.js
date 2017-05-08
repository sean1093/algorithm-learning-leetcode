/**
 * (dev)438. Find All Anagrams in a String
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
//Time Limit Exceeded
var findAnagrams = function(s, p) {
    if(s.length === 0 || s.length < p.length) return [];

    var sArray = s.split("");
    var pArray = p.split("");
    var map = {};
    var res = [];
    for(var k = 0; k<pArray.length; k++) {
        if(pArray[k] in map) {
            map[pArray[k]] = map[pArray[k]]+1;
        }
        else{
            map[pArray[k]] = 1;
        }      
    }
    var temp = JSON.parse(JSON.stringify(map));
    // console.log(map);
    // console.log("length: "+(s.length-p.length));
    for(var i = 0; i< (s.length-p.length+1); i++) {

        var count = 0;
        // console.log("sArray[i]: "+sArray[i]);
        // console.log(map);
        for(var j = i; j< (i+p.length); j++) {   
            // console.log("**sub: "+sArray[j]);        
            if(sArray[j] in map && map[sArray[j]] > 0) {
                // console.log("--in--");
                count++;
                map[sArray[j]] = map[sArray[j]]-1;
            }
            else{
                break;
            }
        }
        // console.log("count: "+count);
        // console.log("p.length: "+p.length);
        if(count == p.length) {
            res.push(i);
        }
        map = JSON.parse(JSON.stringify(temp));

    }

    return res;

};

console.log(findAnagrams("aaa", "aaa")); //[0]
console.log(findAnagrams("aaa", "aa")); //[0, 1]
console.log(findAnagrams("cbaebabacd", "abc")); //[0, 6]
console.log(findAnagrams("abab", "ab")); //[0, 1, 2]
