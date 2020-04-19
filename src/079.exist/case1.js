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
    for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board[j].length; k++) {
            if (traverse(word, 0, board, j, k)) {
                return true;
            }
        }
    }
    return false;
};

// let left = board[j-1][k];
// let right = board[j+1][k];
// let up = board[j][k-1];
// let down = board[j][k+1];

function traverse(word, i, board, j, k) {
    for (let _i = i; _i < word.length; _i++) {
        if (word[_i] === board[j][k]) {
            if (_i === word.length - 1) {
                return true;
            }
            if (j > 0 && board[j - 1][k] === word[_i + 1]) {
                traverse(word, _i + 1, board, j - 1, k);
            } else if (j < board.length - 1 && board[j + 1][k] === word[_i + 1]) {
                traverse(word, _i + 1, board, j + 1, k);
            } else if (k > 0 && board[j][k - 1] === word[_i + 1]) {
                traverse(word, _i + 1, board, j, k - 1);
            } else if (k < board[j].length - 1 && board[j][k + 1] === word[_i + 1]) {
                traverse(word, _i + 1, board, j, k + 1);
            }
        }
    }

    return false;
}

let board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
//leetcode submit region end(Prohibit modification and deletion)
