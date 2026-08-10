/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if ( needle.length === 0) {
        return 0
    }

    let split = haystack.split(needle);
    // console.log(split)
    if(split.length > 1) {
        return split[0].length
    } else {
        return -1
    }
};