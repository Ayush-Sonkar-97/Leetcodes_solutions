/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const res = [];
    // Here i was using binary search and finding the smaller value in res[] array 
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length + 1

        while(left <= right) {
            const mid = Math.floor((left + right) / 2)

            if(arr[mid] === target) {
                return mid
            }
            else if(arr[mid] > target) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }

        return left
    }

    for(let i = 0; i< nums.length; i++) {
        if(!res.length || res[res.length - 1] < nums[i]) {
            res.push(nums[i])
        }
        else {
            const idx = binarySearch(res, nums[i])
            res[idx] = nums[i]
        }
    }

    return res.length
};
