/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var subsets = function(nums) {

    // // Cascading method
    // let res = [[]]

    // for (let i =0 ;  i< nums.length; i++) {
    //     let  size = res.length
    //     for(let j = 0; j < size; j++) {
    //         let cur = res[j].slice()
    //         cur.push(nums[i])
    //         res.push(cur)
    //     }
    // }
    // return res

    // -----------------------------------------------------
    
    //Backtracking / recursion
    let res = []

    let recursion = function(i, curr) {
        res.push([...curr])

        for (let i_next = i; i_next < nums.length; i_next++) {
            curr.push(nums[i_next])
            recursion(i_next + 1, curr)
            curr.pop()
        }
    }

    recursion(0, [])
    return res;
};