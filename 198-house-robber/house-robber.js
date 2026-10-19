/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // combinations -> sub problems -> recursion

    let prev = 0
    let cur = 0

    for (let i = 0; i < nums.length; i++) {
        [prev, cur] = [cur, Math.max(cur, prev + nums[i])]
    }

    return cur
};