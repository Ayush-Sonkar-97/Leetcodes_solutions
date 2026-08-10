/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let start = 0
    let end = x.length - 1
    
    while(start <= end){
        
        if(x[start] !== x[end]){  
            return false;
        }
        start += 1
        end -= 1    
    }
    return true;
};