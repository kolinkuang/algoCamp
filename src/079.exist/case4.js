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
    // 1.怎么找
    // 2.什么时候终止
    // 3.find内部， 怎么找下一步（缓存存储中间的过程）

    // 1.怎么找
    if (board.length === 0) {
        return false;
    }
    if (word.length === 0) {
        return true;
    }
    const totalRow = board.length;
    const totalCol = board[0].length;
    for (let rowIndex = 0; rowIndex < totalRow; rowIndex++) {
        for (let colIndex = 0; colIndex < totalCol; colIndex++) {
            const result = find(rowIndex, colIndex, 0);
            if (result) {
                return true;
            }
        }
    }

    return false;

    function find(rowIndex, colIndex, wordIndex) {
        // 2.什么时候终止
        if (rowIndex < 0 || rowIndex >= totalRow) {
            return false;
        }
        if (colIndex < 0 || colIndex >= totalCol) {
            return false;
        }
        let letterOnBoard = board[rowIndex][colIndex];
        if (letterOnBoard !== word[wordIndex]) {
            //单词不匹配
            return false;
        }
        if (wordIndex === word.length - 1) {
            //已经找到最后一个匹配字母，完全匹配，返回true
            return true;
        }

        // 3.find内部， 怎么找下一步（缓存存储中间的过程）
        board[rowIndex][colIndex] = undefined;   //先标记旧位置为null，以免重复匹配

        const result = find(rowIndex - 1, colIndex, wordIndex + 1) ||
            find(rowIndex + 1, colIndex, wordIndex + 1) ||
            find(rowIndex, colIndex - 1, wordIndex + 1) ||
            find(rowIndex, colIndex + 1, wordIndex + 1);

        board[rowIndex][colIndex] = letterOnBoard;

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
