/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    // nums = [13,25,83,77]
    i = nums.join('')
    // i = 13258377
    j = i.split('')
    // j = ['1','3','2','5','8','3','7','7']
    k = j.map(Number)
    return k
};