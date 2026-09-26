/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(false))

    let start = 0, end = 0
    let maxlen = 1

    for(let i = 0; i < n; i++) {
        dp[i][i] = true

        for (let j = i - 1; j >= 0; j--) {
            if(s[i] == s[j] && (i - j <= 2 || dp[j + 1][i - 1])) {
                dp[j][i] = true

                if(maxlen < i - j + 1) {
                    maxlen = i - j + 1
                    start = j
                    end = i
                }
            } 

        }
    }

    return s.slice(start, start + maxlen)
};