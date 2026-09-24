/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
    const stack = [n]
    let op = '*'

    for (let i = n - 1; i > 0; i--) {
        switch (op) {
            case '*':
                stack.push(stack.pop() * i)
                op = '/'
                break
            case '/':
                stack.push(Math.trunc(stack.pop() / i))
                op = '+'
                break
            case '+':
                stack.push(i)
                op = '-'
                break
            case '-':
                stack.push(-i)
                op = '*'
                break
        }
    }
    return stack.reduce((acc, el) => acc + el, 0)
};