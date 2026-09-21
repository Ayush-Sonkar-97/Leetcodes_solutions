/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const pm = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }

    let com = ['']

    for(let i = 0; i< digits.length; i++) {
        const new_com = []
        const digit = digits[i]

        for(let j = 0; j < com.length; j++) {
            
            const combination = pm[digit]

            for(let k = 0; k < combination.length; k++) {

                new_com.push(com[j] + combination[k])
            }
        }
        com = new_com
    }

    return com
}