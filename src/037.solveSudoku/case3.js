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

    const n = board.length;

    // 1.how to find the first
    backTrack(0, 0, board);

    function backTrack(row, col, board) {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        if (col === 9) {
            // 3.how to terminate the execution (col)
            return backTrack(row + 1, 0, board);
        }

        if (row === n) {
            // 3.how to terminate the execution (row)
            return true;
        }

        if (board[row][col] !== '.') {
            // 2.how to find the next
            return backTrack(row, col + 1, board);
        }

        for (let i = 1; i <= numbers.length; i++) {
            i = i + '';

            if (isValid(row, col, i, board)) {
                board[row][col] = i;

                // 2.how to find the next
                if (backTrack(row, col + 1, board)) {
                    return true;
                }

                board[row][col] = '.';
            }
        }

        return false;
    }

    function isValid(row, col, current, board) {
        for (let i = 0; i < n; i++) {
            if (board[i][col] === current || board[row][i] === current) {
                return false;
            }

            if (board[Math.trunc(row / 3) * 3 + Math.trunc(i / 3)][Math.trunc(col / 3) * 3 + Math.trunc(i % 3)] === current) {
                return false;
            }
        }

        return true;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
