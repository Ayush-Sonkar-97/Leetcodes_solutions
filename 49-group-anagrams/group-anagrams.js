/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('')

        if (!map.has(key)) {
            map.set(key, [])
            // console.log(map)
        }

        map.get(key).push(str)
        // console.log(map)
    }

    let res = Array.from(map.values())

    return res
};