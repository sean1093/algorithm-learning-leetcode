/**
 * 290. Word Pattern
 * Given a pattern and a string str, find if str follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
//same as 205. Isomorphic Strings
//create two map to save {pattern, str} / {str, pattern}
var wordPattern = function(pattern, str) {
    var t = pattern.split("");
    var s = str.split(/\s/);
    var mapT = {};
    var mapS = {};
    if (t.length != s.length) return false;
    for(var i = 0; i<s.length; i++) {
        if(s[i] in mapS) {
            if(t[i] != mapS[s[i]])
                return false;
        }
        else {
            mapS[s[i]] = t[i]; 
        }
        if(t[i] in mapT) {
            if(s[i] != mapT[t[i]])
                return false;
        }
        else {
            mapT[t[i]] = s[i]; 
        }
    }
    return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); //true
console.log(wordPattern("abba", "dog cat cat fish")); //false
console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("abba", "dog dog dog dog")); //false
