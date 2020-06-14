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
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    // 1.how to find the first
    // 2.how to find the next
    // 3.how to terminate the execution

    if (board === null ||
        board.length !== 9 ||
        board[0] === null ||
        board[0].length !== 9
    ) {
        return;
    }

    backTrack(board, 0, 0);

    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function backTrack(board, row, col) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let n = board.length;

        if (col === 9) {
            // 3.how to terminate the execution (col)
            return backTrack(board, row + 1, 0);
        }

        if (row === n) {
            // 3.how to terminate the execution (row)
            return true;
        }

        if (board[row][col] !== '.') {
            // 2.how to find the next
            return backTrack(board, row, col + 1);
        }

        for (let cur = 1; cur <= numbers.length; cur++) {
            cur = cur + '';

            if (!isValid(board, row, col, cur)) {
                continue;
            }
            board[row][col] = cur;

            // 2.how to find the next
            if (backTrack(board, row, col + 1)) {
                return true;
            }

            board[row][col] = '.';
        }

        return false;
    }

    function isValid(board, row, col, cur) {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === cur) {
                return false;
            }
            if (board[i][col] === cur) {
                return false;
            }

            if (board[Math.trunc(row / 3) * 3 + Math.trunc(i / 3)][Math.trunc(col / 3) * 3 + Math.trunc(i % 3)] === cur) {
                return false;
            }
        }
        return true;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
