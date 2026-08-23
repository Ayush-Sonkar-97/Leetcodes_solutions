/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
    let s = num.split('')
    // console.log(s)

    let bob = 0
    let alice = 0
    let qleft = 0, qright = 0

    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] === '?') {
            qleft += 1
        }
        else { bob += Number(s[i]) }
    }
    // console.log(bob)

    for (let j = s.length / 2; j < s.length; j++) {
        if (s[j] === '?') {
            qright += 1
        }
        else {
            alice += Number(s[j])
        }
    }
    // console.log(alice)

    // string only contains digits
    if (qleft + qright === 0){
        return bob != alice
    }

    if((qleft + qright) % 2 !== 0){
        return true
    }

    if (qleft === qright) {
        return bob != alice
    }

    
    // let diff = qleft - qright

    // if(diff % 2 === 0) {
    //     return false
    // }

    // if (bob === alice) {
    //     return false
    // }

    return 2 * (bob - alice) !== 9 * (qright - qleft)
};