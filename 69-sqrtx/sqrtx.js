/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1) {
        return x
    }

    for (let i = 2 ; i <= x; i++) {
        if(i * i === x) {
            return i
        } else if (i * i > x) {
            return i - 1
        }
    }
};