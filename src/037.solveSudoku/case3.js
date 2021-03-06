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

    // 1.how to find the first
    backTrack(0, 0, board);

    function backTrack(row, col, board) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (col === 9) {
            // 2.how to find the next row
            return backTrack(row + 1, 0, board);
        }

        if (row === n) {
            // 3.how to terminate the execution (max row)
            return true;
        }

        if (board[row][col] !== '.') {
            // 2.how to find the next column
            return backTrack(row, col + 1, board);
        }

        for (let num = 1; num <= numbers.length; num++) {
            num = num + '';

            if (isValid(row, col, num, board)) {
                board[row][col] = num;

                // 2.how to find the next
                if (backTrack(row, col + 1, board)) {
                    return true;
                }

                // reset the cell when the previous decision is wrong
                board[row][col] = '.';
            }
        }

        return false;
    }

    function isValid(row, col, currentNum, board) {
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === currentNum || board[row][i] === currentNum) {
                return false;
            }

            if (board[Math.trunc(row / 3) * 3 + Math.trunc(i / 3)][Math.trunc(col / 3) * 3 + Math.trunc(i % 3)] === currentNum) {
                return false;
            }
        }

        return true;
    }
};

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
//leetcode submit region end(Prohibit modification and deletion)
