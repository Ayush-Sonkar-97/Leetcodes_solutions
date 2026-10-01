/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) {
        return 0
    }
    
    let numSet = new Set()

    for(let i = 0; i < nums.length; i++){
        numSet.add(nums[i])
    }

    let longest = 1
    for(let i of numSet) {
        if(numSet.has(i - 1)) {
            continue
        }
        else {
            let cur = i
            let count = 1

            while(numSet.has(cur + 1)) {
                cur += 1;
                count += 1
            }

            longest = Math.max(longest, count)
        }
    }

    return longest

};