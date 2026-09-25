/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj != null) {
        // console.log(`${obj}, ${obj.constructor}, ${classFunction}`)
        if(obj.constructor === classFunction) {
            return true

        }

        obj = Object.getPrototypeOf(obj)
        // console.log(obj)
    }

    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */