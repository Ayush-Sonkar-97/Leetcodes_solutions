/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    if (!s) return 0

    let i = 0
    const n = s.length

    while (i < n && s[i] === ' ') {
        i++
    }

    if(i === n) return 0

    let sign = 1
    if(s[i] === '+') {
        i++
    } else if (s[i] === '-') {
        sign = -1
        i++
    }

    let max = 2**31 - 1
    let min = -1 * 2**31

    let res = 0;
    while(i < n && s[i] >= '0' && s[i] <=9) {
        const digit = parseInt(s[i])
        res = res * 10 + digit
        
        if(sign * res <= min) {
            return min
        }
        if(sign * res >= max) {
            return max
        }

        i++
    }

    return res * sign
};