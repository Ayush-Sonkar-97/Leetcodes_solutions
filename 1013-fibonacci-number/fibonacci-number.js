/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // let ans = [0, 1]
    // // console.log(ans)
    // for(let i = 2; i <= n; i++) {
    //     ans.push(ans[i - 1] + ans[i - 2])
    //     console.log(ans)
    // }

    // return ans[n]

    if(n == 1) return 1
    if (n == 0) return 0

    return fib(n-1) + fib(n-2)
};