/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 // using binary search
var search = function (nums, target) {
    let start = 0, end = nums.length - 1
    
    // if(nums[start] === target) return start
    // if(nums[end] === target) return end

    while (start <= end) {


        let mid = Math.floor(start + (end - start) / 2)

        if (nums[mid] == target) {
            return mid
        }

        // if left part is sorted
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1
            }
            else {
                start = mid + 1
            }
        }
        // if right part is sorted
        else {
            if (target > nums[mid] && target <= nums[end]) {
                start = mid + 1
            }
            else {
                end = mid - 1
            }
        }
    }

    // if target not found
    return -1
};