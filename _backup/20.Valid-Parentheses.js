/**
 * 20. Valid Parentheses
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * 
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var str = s.split("");
    var stack = [];
    for(var key in str) {
        if(str[key] == "(" || str[key] == "[" || str[key] == "{") stack.push(str[key]);     
        else if(str[key] == ")" || str[key] == "]" || str[key] == "}") {            
            var target = stack.pop();
            if(target === undefined) return false;          
            else if(target == "(") {
                if(str[key] != ")") return false; 
            }                         
            else if(target == "[") {
                if(str[key] != "]") return false; 
            }
            else if(target == "{") {
                if(str[key] != "}") return false;
            }
        }
        else{
            return false;
        }           
    }
    if(stack.length > 0) return false;
    return true;
};

console.log(isValid("{")); // false
console.log(isValid("a(fe, {P}, )")); // false
console.log(isValid("")); // true
console.log(isValid("(){}")); // true
console.log(isValid("(){()}")); // true 
console.log(isValid("({)}")); // false
console.log(isValid("(a)")); // false
console.log(isValid("((((()))))}")); // false
console.log(isValid("{[}]")); // false
