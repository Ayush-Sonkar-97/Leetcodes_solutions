/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let s = ''
    for(let i = 0; i < strs[0].length; i++) {
        if(strs[0][i] === strs[strs.length - 1][i]){
            s += strs[0][i]
        } else { break }
    }

    return s
};