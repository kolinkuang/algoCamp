//给定一个二维网格和一个单词，找出该单词是否存在于网格中。
//
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
//
//
//
// 示例:
//
// board =
//[
//  ['A','B','C','E'],
//  ['S','F','C','S'],
//  ['A','D','E','E']
//]
//
//给定 word = "ABCCED", 返回 true
//给定 word = "SEE", 返回 true
//给定 word = "ABCB", 返回 false
//
//
//
// 提示：
//
//
// board 和 word 中只包含大写和小写英文字母。
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10^3
//
// Related Topics 数组 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    // 1.how to find the first
    // 2.how to find the next
    // 3.how to terminate the execution

    if (board.length === 0) {
        return true;
    }

    if (word.length === 0) {
        return false;
    }

    let totalRow = board.length;
    let totalCol = board[0].length;

    for (let row = 0; row < totalRow; row++) {
        for (let col = 0; col < totalCol; col++) {
            // 1.how to find the first
            if (found(row, col, 0)) {
                return true;
            }
        }
    }

    return false;

    function found(row, col, wordIndex) {
        if ((row < 0 || row >= totalRow) || (col < 0 || col >= totalCol)) {
            return false;
        }

        let letterToFind = board[row][col];
        if (letterToFind !== word[wordIndex]) {
            return false;
        }

        if (wordIndex === word.length - 1) {
            // 3.how to terminate the execution
            return true;
        }

        // 2.how to find the next
        board[row][col] = undefined;
        let result = found(row - 1, col, wordIndex + 1) ||
            found(row + 1, col, wordIndex + 1) ||
            found(row, col - 1, wordIndex + 1) ||
            found(row, col + 1, wordIndex + 1);

        board[row][col] = letterToFind;

        return result;
    }
};

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
//leetcode submit region end(Prohibit modification and deletion)
