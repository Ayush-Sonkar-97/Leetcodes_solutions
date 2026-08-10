/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim()
    let word = trimmed.split(/\s+/).pop()
    return word.length
};