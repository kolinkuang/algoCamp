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

const {assert} = require('../testUtil');

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {String[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    // 1.how to find the first
    // 2.how to find the next
    // 3.how to terminate the execution
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                //已有数字了
                // console.log('Next one');
                continue;
            }
            //放一个数字试试，数字是1-9
            for (let k = 1; k <= 9; k++) {
                if (isValid(board, i, j, k.toString())) {
                    // 能放
                    board[i][j] = k.toString();
                    // console.log(i, j);
                    // 递归试试下一格
                    if (solveSudoku(board)) {
                        // console.log('Solved');
                        return true;
                    }
                    // 不能放；回溯
                    board[i][j] = '.';
                }
            }
            return false;
        }
    }

    return true;
};

function isValid(board, row, col, kStr) {
    const x = Math.floor(row / 3) * 3;
    const y = Math.floor(col / 3) * 3;

    for (let i = 0; i < 9; i++) {
        if (board[row][i] === kStr || board[i][col] === kStr) {
            return false;
        }
    }

    //小方块
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[x + i][y + i] === kStr) {
                return false;
            }
        }
    }

    return true;
}

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

let expected = [
    ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
    ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
    ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
    ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
    ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
    ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
    ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
    ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
    ['3', '4', '5', '2', '8', '6', '1', '7', '9']
];

assert('Failed to pass!', board, expected);