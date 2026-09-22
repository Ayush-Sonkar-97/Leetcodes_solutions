/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // // Two sum problem using brute force
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return []
    // using Hash Map
    let visitedMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        // console.log(`value = ${nums[i]}, index = ${i}, complement = ${target} - ${nums[i]} = ${complement}`)

        if (visitedMap.has(complement)) {
            return [visitedMap.get(complement), i]
        }

        visitedMap.set(nums[i], i)

    }
    return []
};