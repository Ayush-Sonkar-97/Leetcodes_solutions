/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1
    let b = 2
    let c = 3

    if(n <= 3) return n

    for (let i = 4; i <= n; i++){
        a = b;
        b = c
        c = a + b
    }

    return c
};