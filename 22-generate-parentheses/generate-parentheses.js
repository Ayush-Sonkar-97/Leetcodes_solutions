/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    let i = 0
    let open = n
    let close = n
    let ch = new Array()

    const backtrack = (i, open, close) => {
        if(open === 0 && close === 0) {
            res.push(ch.join(''));
            return
        }
        if(open > 0) {
            ch[i] = '('
            backtrack(i + 1, open - 1, close)
        }
        if(close > open) {
            ch[i] = ')'
            backtrack(i + 1, open, close - 1)
        }
    }

    backtrack(i, open, close)

    return res
};