/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    

    solver(board, 0, 0);

    function solver(board, row, col) {
        // All rows are completed
        if (row === 9) {
            return true;
        }

        // Calculate next cell
        let nextRow = row;
        let nextCol = col + 1;

        if (nextCol === 9) {
            nextRow = row + 1;
            nextCol = 0;
        }

        // If cell is already filled, move to next cell
        if (board[row][col] !== '.') {
            return solver(board, nextRow, nextCol);
        }

        // Try numbers 1 to 9
        for (let i = 1; i <= 9; i++) {

            if (safe(board, row, col, i)) {

                // Place number
                board[row][col] = String(i);

                // Recursively solve next cell
                if (solver(board, nextRow, nextCol)) {
                    return true;
                }

                // Backtrack
                board[row][col] = '.';
            }
        }

        return false;
    }

    function safe(board, row, col, val) {
        let ch = String(val);

        // Check row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === ch) {
                return false;
            }
        }

        // Check column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === ch) {
                return false;
            }
        }

        // Check 3x3 box
        let sr = Math.floor(row / 3) * 3;
        let sc = Math.floor(col / 3) * 3;

        for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {
                if (board[i][j] === ch) {
                    return false;
                }
            }
        }

        return true;
    }
};