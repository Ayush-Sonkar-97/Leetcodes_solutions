/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(d) {
    let i = d.length - 1;
    
    for(;i >= 0; i--) {
        if(d[i] + 1 !== 10) {
            d[i] += 1
            return d
        }

        d[i] = 0
        if(i === 0) {
            d.unshift(1);
            return d
        }
    }
};