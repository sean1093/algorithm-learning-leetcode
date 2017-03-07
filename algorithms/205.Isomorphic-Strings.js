/**
 * 205. Isomorphic Strings
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
 * You may assume both s and t have the same length.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    s = s.split("");
    t = t.split("");
    var len = s.length;
    var mapS = {};
    var mapT = {};
    for(var i = 0; i < len; i++) {
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
console.log(isIsomorphic("", "")); //true
console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
console.log(isIsomorphic("egg", "adds")); //true
console.log(isIsomorphic("ab", "aa")); //false
console.log(isIsomorphic("aa", "ab")); //false