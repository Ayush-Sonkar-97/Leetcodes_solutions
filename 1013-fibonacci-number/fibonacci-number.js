/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let ans = [0, 1]
    // console.log(ans)
    for(let i = 2; i <= n; i++) {
        ans.push(ans[i - 1] + ans[i - 2])
        console.log(ans)
    }

    return ans[n]
};