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

    // let result = [];

    const n = board.length;

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // 1.how to find the first
    modify(0, 0, board);

    function modify(row, col, board) {
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                let number = board[row][col];
                if (typeof number === 'number') {
                    modify(row, col + 1, board);
                }
                for (let i = 1; i <= numbers.length; i++) {
                    if (suit(row, col, i)) {
                        board[row][col] = i + '';
                        break;
                    }
                }
            }
        }
    }

    function suit(row, col, current) {
        for (let r = 0; r < n; r++) {
            if (board[r][col] === current) {
                return false;
            }
        }

        for (let c = 0; c < n; c++) {
            if (board[row][c] === current) {
                return false;
            }
        }

        return true;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
