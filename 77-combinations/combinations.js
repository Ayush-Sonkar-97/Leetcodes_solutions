/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];

    let backtrack = function(start, arr) {
        if(arr.length == k) {
            res.push([...arr]);
            return;
        }
        for (let i = start; i <= n; i++) {
            arr.push(i);
            backtrack(i + 1, arr);
            arr.pop();
        }

    }
    backtrack(1, []);
    return res;
};