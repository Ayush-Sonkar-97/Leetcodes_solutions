/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = []
    candidates.sort((a, b) => a - b)

    const backtrack = (i, target, current) => {
        if (target === 0) {
            res.push([...current]);
            return
        }
        if (target < 0 || i >= candidates.length) {
            return
        }

        current.push(candidates[i])
        backtrack(i + 1, target - candidates[i], current)
        current.pop()

        let next = i + 1;
        while (next < candidates.length && candidates[next] === candidates[i]) {
            next++;

        }
        backtrack(next, target, current)

    }

    backtrack(0, target, [])
    return res
};