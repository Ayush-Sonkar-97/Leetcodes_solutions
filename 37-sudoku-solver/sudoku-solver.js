/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    

solver(board, 0, 0)

    function solver(board, row, col) {
        // All rows are complete
        if(row === 9) { 
            return true
        }

        // calculate next cell
        let nextRow = row
        let nextCol = col + 1

        if(nextCol === 9) {
            nextRow = row + 1
            nextCol = 0
        }

        // if cell is already filled, move to next cell
        if(board[row][col] !== '.') {
            return solver(board, nextRow, nextCol)
        }
        //
        // try number 1 - 9
        for(let i = 1; i <= 9; i++) {
            if(safe(board, row, col, i)) {
                // 
                //place number

                board[row][col] = String(i)

                // Recursively solve next cell
                if(solver(board, nextRow, nextCol)) {
                    return true
                }

                // backtrack
                board[row][col] = '.'
            }
        }

        return false
    }

    function safe(board, row, col, val) {
        let ch = String(val)

        // check row
        for(let i = 0; i < 9; i++) {
            if(board[row][i] === ch) {
                return false
            }
        }

        // check col
        for(let i = 0; i < 9; i++) {
            if(board[i][col] === ch) {
                return false
            }
        }

        // check 3X3 box
        let srow = Math.floor(row/3) * 3;
        let scol = Math.floor(col/3) * 3

        for(let i = srow; i < srow + 3; i++) {
            for(let j = scol; j < scol + 3; j++) {
                if(board[i][j] === ch) {
                    return false
                }
            }
        }

        return true
    }
};