/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1)
    }

    const res = []
    for(let [key, value] of map) {
        res.push([key, value])
    }

    res.sort((a, b) => b[1] - a[1])

    let ans = res.slice(0, k).map((x) => x[0])

    return ans
};