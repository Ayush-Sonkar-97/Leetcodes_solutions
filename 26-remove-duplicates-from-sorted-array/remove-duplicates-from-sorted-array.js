/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // let i = 0

    // for (let j = 0; j < nums.length; j++) {
    //     if(nums[i] !== nums[j]) {
    //         nums[++i] = nums[j]
    //     }
    // }

    // return ++i

    if(!nums) return 0

    let slow = 1

    for(let fast = 1; fast < nums.length; fast++) {
        if(nums[fast] !== nums[slow - 1]) {
            nums[slow] = nums[fast]
            slow += 1
        }
    }

    return slow
};