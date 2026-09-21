/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const len = digits.length

    if(len === 0) return []

    const phone_map = ["abc", "def", "ghi", 'jkl', "mno", "pqrs", "tuv", "wxyz"];

    const output = []

    const backtrack = (combination, new_digit, phone_map, output) => {
        if(new_digit.length === 0) {
            output.push(combination)
        }
        else {
            const letters = phone_map[new_digit[0] - '2']
            for(let i = 0; i < letters.length; i++) {
                backtrack(combination + letters[i], new_digit.slice(1), phone_map, output)
            }
        }
    }

    backtrack("", digits, phone_map, output)

    return output

}