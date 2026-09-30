/**
 * s: [ab,b,c,abc]
 * 
 * extra character
 * 
 * encode string and then decode the string
 * 
 * 
 * ES : [ab#b#c#abc]
 * DS : [ab,b,c,abc]
 * 
 * Time complexity: O(n)
 */

var encode = (strs) => {
    if(strs.length === 0) {
        return String.fromCharCode(258)
    }

    let separate = String.fromCharCode(257)
    let sb = ''

    for(let i = 0; i < strs.length; i++) {
        sb += strs[i]
        sb += separate
    }

    let s = sb.slice(0, -1)

    return s
}

let deocde = (str) => {
    
    if(str.length == 0) {
        return []
    }

    let separate = String.fromCharCode(257)
    let res = str.split(separate)
    return res
}

let strs = ["Hello", "World"]

console.log(encode(strs))
console.log(deocde(encode(strs)))