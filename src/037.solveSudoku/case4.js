//编写一个程序，通过已填充的空格来解决数独问题。
//
// 一个数独的解法需遵循如下规则：
//
//
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
//
//
// 空白格用 '.' 表示。
//
//
//
// 一个数独。
//
//
//
// 答案被标成红色。
//
// Note:
//
//
// 给定的数独序列只包含数字 1-9 和字符 '.' 。
// 你可以假设给定的数独只有唯一解。
// 给定数独永远是 9x9 形式的。
//
// Related Topics 哈希表 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {String[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    // 1.how to find the first
    // 2.how to find the next
    // 3.how to terminate the execution

    const n = board.length;

    const numbers = [];
    for (let i = 1; i <= 9; i++) {
        numbers.push(i);
    }

    _backTrack(0, 0, numbers, board);

    function _backTrack(row, col, numbers, board) {
        // how to find the next row(col is max)
        if (col === n) {
            return _backTrack(row + 1, 0, numbers, board);
        }

        // how to terminate the execution(row is max)
        if (row === n) {
            return true;
        }

        // how to find the next col (ignore those already number-assigned)
        if (!isNaN(+board[row][col])) {
            return _backTrack(row, col + 1, numbers, board);
        }

        // iterate over the columns
        for (let num = 1; num <= numbers.length; num++) {
            let currentNum = num + '';
            // how to find the next column
            // (current number is not duplicate with any of the previous options)
            if (_isValid(row, col, currentNum, board)) {
                board[row][col] = currentNum;
                if (!_backTrack(row, col + 1, numbers, board)) {
                    // reset the cell when the previous decision is wrong
                    board[row][col] = '.';
                } else {
                    return true;
                }
            }
        }
    }

    function _isValid(row, col, currentNum, board) {
        for (let i = 0; i < board.length; i++) {
            // if the currentNum is duplicate with any number on the same column but different rows, or same row but different columns
            if (board[i][col] === currentNum || board[row][i] === currentNum) {
                return false;
            }

            // if the currentNum is duplicate with the sub board cell values
            if (board[Math.trunc(row / 3) * 3 + Math.trunc(i / 3)][Math.trunc(col / 3) * 3 + Math.trunc(i % 3)] === currentNum) {
                return false;
            }
        }
        return true;
    }

};
//leetcode submit region end(Prohibit modification and deletion)

let board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];
solveSudoku(board)
console.table(board);