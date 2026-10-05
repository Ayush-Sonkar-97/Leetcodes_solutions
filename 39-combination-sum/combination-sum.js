/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(c, target) {
    let res = []
    let subset = []
    c.sort((a,b) => a-b)

    const backtrack = (c, start, target, subset, res) => {
        if(target == 0) {
            res.push([...subset])
            return
        }
        if(target < 0) {
            return
        }

        for(let i = start; i < c.length; i++) {
            subset.push(c[i]);
            backtrack(c, i, target - c[i], subset, res)
            subset.pop()
        }
    }

    backtrack(c, 0, target, subset, res)
    return res
};