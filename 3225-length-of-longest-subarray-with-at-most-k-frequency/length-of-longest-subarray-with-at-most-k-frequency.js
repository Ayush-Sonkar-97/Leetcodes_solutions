/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let left = 0
    let res = 0

    const count = new Map()
    const n = nums.length

    for( let i = 0 ; i < n; i++) {
        count.set( nums[i], (count.get(nums[i]) || 0) + 1 )

        while (count.get(nums[i]) > k) {
            count.set(nums[left], count.get(nums[left]) - 1)

            left++;
        }

        res = Math.max(res, i - left + 1)
    }

    return res
};


// two pointer  'left' 'right' and using sliding window 
// maintain a frequency
// move 'right' 
// add nums[right] to frequency map
// if nums[right] > k move 'left' forward
// while shrinking the window decrese frequency of nums[left]
// stop shrinking once nums[right] appears at most k times again
// window size becomes 'right - left + 1'


// 