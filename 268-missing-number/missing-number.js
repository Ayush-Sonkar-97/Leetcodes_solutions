/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let expectedsum = n * (n + 1) / 2
    let actualsum = 0;

    for (let num of nums) {
        actualsum += num;
    }

    return expectedsum - actualsum
};