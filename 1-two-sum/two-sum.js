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


    // // using Hash Map
    // let visitedMap = new Map()

    // for (let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i]
    //     // console.log(`value = ${nums[i]}, index = ${i}, complement = ${target} - ${nums[i]} = ${complement}`)

    //     if (visitedMap.has(complement)) {
    //         return [visitedMap.get(complement), i]
    //     }

    //     visitedMap.set(nums[i], i)

    // }
    // return []

    // Using two pointer approach
    const indexedNums = nums.map((val, idx) => ({ val, idx }))
    // console.log(indexedNums)

    const sorted = indexedNums.sort((a, b) => a.val - b.val)
    // console.log(sorted)

    let left = 0;
    let right = nums.length - 1

    while (left < right) {
        const sum = indexedNums[left].val + indexedNums[right].val

        if (sum === target) {
            return [indexedNums[left].idx, indexedNums[right].idx]
        }
        else if (sum < target) {
            left += 1
        }
        else {
            right -= 1
        }
    }
    return []
};