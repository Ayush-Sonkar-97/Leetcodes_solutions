/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = ''


    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z0-9]/.test(s[i])) {
            str += s[i].toLowerCase()
        }

    }

    console.log(str)

    let left = 0; right = str.length - 1
    while(left < right) {

        if (str[left] !== str[right]) {
            return false
        }

        left++
        right--
    }

    return true
};