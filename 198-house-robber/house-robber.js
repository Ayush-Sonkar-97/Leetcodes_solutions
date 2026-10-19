/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // combinations -> sub problems -> recursion

    // let prev = 0
    // let cur = 0

    // for (let i = 0; i < nums.length; i++) {
    //     [prev, cur] = [cur, Math.max(cur, prev + nums[i])]
    // }

    // return cur

    let y = 0, n = 0;

    for (let i = 0; i < nums.length; i++) {
        let a = n + nums[i];
        let b = Math.max(n, y);
        y = a;
        n = b;
    }

    return Math.max(y, n)
};