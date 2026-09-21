/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const len = digits.length

    if(len === 0) return []

    const phone_map = ["abc", "def", "ghi", 'jkl', "mno", "pqrs", "tuv", "wxyz"];

    const output = []

    const backtrack = (combination, next_digit, phone_map, output) => {
        if(next_digit.length === 0) {
            output.push(combination)
            // console.log(output)
        }
        else {
            const new_digit = next_digit[0] - '2'
            const letters = phone_map[new_digit]
            for(let i = 0; i < letters.length; i++) {
                backtrack(combination + letters[i], next_digit.slice(1), phone_map, output)
            }
        }
    }

    backtrack("", digits, phone_map, output)

    return output

}