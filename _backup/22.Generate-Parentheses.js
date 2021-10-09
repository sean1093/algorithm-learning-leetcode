/**
* 20. Generate Parentheses
* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
* @param {number} n
* @return {string[]}
*/
// backtrack: https://blog.csdn.net/ajianyingxiaoqinghan/article/details/79682147
const generateParenthesis = (n) => {
    const res = [];
    const backtrack = (sublist, res = [], left = 0, right = 0) => {
        if (left === 0 && right === 0) {
            res.push(sublist);
            return '';
        }
        if (left > right) {
            return;
        }
        if (left > 0) {
            backtrack(sublist + "(", res, left - 1, right);
        } 
        if (right > 0) {
            backtrack(sublist + ")", res, left, right - 1);
        }
    };
    backtrack('', res, n, n);
    return res;
};

generateParenthesis(3); // 5
generateParenthesis(4); // 14
