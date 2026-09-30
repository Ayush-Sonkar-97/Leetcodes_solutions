/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    // initialize the left and right value
    let left = 0, right = height.length - 1

    let leftMax = 0, rightMax = 0
    let totalWater = 0

    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])

        // if 
        if(leftMax < rightMax) {
            totalWater += leftMax - height[left]
            left += 1
        }
        else {
            totalWater += rightMax - height[right]
            right -= 1
        }
    }

    return totalWater
};