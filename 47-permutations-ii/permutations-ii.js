/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => a-b)
    let res = []
    let subset = []

    const backtrack = (subset, curr) => {
        if(subset.length == nums.length) {
            res.push([...subset])
            return
        }
        for(let i = 0; i < curr.length; i++) {
            if(i > 0 && curr[i] == curr[i - 1]) {
                continue
            }
            subset.push(curr[i])

            backtrack(subset, [...curr.slice(0,i), ...curr.slice(i+1)])
            subset.pop()
        }

    }

    backtrack(subset, nums)
    return res
};