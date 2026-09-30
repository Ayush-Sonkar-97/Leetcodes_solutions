/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = new Array(nums.length).fill(1)

    let left = 1;
    for(let i = 0; i < nums.length; i++) {
        res[i] = res[i] * left
        left = left * nums[i]
    }

    // console.log(res)

    let right = 1
    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] * right
        right = right * nums[i]
    }

    // console.log(res)
    return res
};