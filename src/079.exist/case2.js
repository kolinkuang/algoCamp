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
    totalRow = board.length;
    if (totalRow === 0) {
        return false;
    }

    totalCol = board[0].length;

    let marked = Array(totalRow).fill(Array(totalCol).fill(null))

    for (let i = 0; i < totalRow; i++) {
        for (let j = 0; j < totalCol; j++) {
            if (traverse(i, j, 0, word, board, marked)) {
                return true;
            }
        }
    }

    return false;
};

function traverse(i, j, start, word, board, marked) {
    if (start === word.length - 1) {
        return board[i][j] === word[start];
    }

    if (board[i][j] === word[start]) {
        marked[i][j] = true;
        for (let k = 0; k < direction.length; k++) {
            let newX = i + direction[k][0];
            let newY = j + direction[k][1];
            if (inArea(newX, newY)
                // && !marked[newX][newY]
            ) {
                if (traverse(newX, newY, start + 1, word, board, marked)) {
                    return true;
                }
            }
        }
        marked[i][j] = false;
    }

    return false;
}

function inArea(x, y) {
    return x >= 0 && x < totalRow && y >= 0 && y < totalCol;
}

let totalRow, totalCol;

const direction = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0]
];

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
];

// console.log(exist(board, 'ABCCED'));
// console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
//leetcode submit region end(Prohibit modification and deletion)
